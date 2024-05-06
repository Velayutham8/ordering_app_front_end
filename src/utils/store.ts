import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

const orderSlice = createSlice({
  name: 'PlaceOrder',
  initialState: {
    totalitems: 0,
    orders: {},
    totalprice: 0,
    storename: 'velanstore',
  },
  reducers: {
    setOrders: (state, action) => {
      //   {
      //     "idly mix": {
      //         "productid": "1",
      //         "productname": "aaa",
      //         "size": "234",
      //         "price": 200,
      //         "stock": 1,
      //         "order": 1
      //     }
      // }

      console.log('action', action);

      const key: string = Object.keys(action.payload)[0];

      const obj: any = action.payload[key];

      const total = obj.price * (obj.stock * obj.order);

      const order: any = state.orders;

      if (order[key]) {
        const index = order[key].findIndex(
          (el: any) => el.productid === obj.productid
        );

        if (index >= 0) {
          order[key][index] = { ...obj, total };

          state.orders = order;
          return;
        }
      }

      state.orders = {
        ...state.orders,
        [key]: [...(order[key] || []), { ...obj, total }],
      };
    },

    placeOrder: (state, action) => {
      const keys = Object.keys(state.orders);

      const order: any = state.orders;

      let totalitems: number = 0;
      let totalprice: number = 0;

      keys.forEach((key: string) => {
        totalitems += order[key].length;
        totalprice += order[key].reduce((acc: any, curr: any) => {
          return curr.total + acc;
        }, 0);
      });

      state.totalitems = totalitems;
      state.totalprice = totalprice;

      action.payload = { totalitems, totalprice };
    },
  },
});

export const { setOrders, placeOrder } = orderSlice.actions;

export const store = configureStore({
  reducer: orderSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented());
// // {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// // {value: 1}
