import React from 'react';
import PlaceOrderlist from '../components/PlaceOrderlist';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../utils/store';
import axios from 'axios';

function PlaceOrderPage() {
  const goto = useNavigate();
  const dispatch = useDispatch();
  const storeData = useSelector((state: any) => state);

  const createOrder = async () => {
    const data = dispatch(placeOrder({}));
    console.log('process.env.API_URL', data);

    axios
      .post(`${process.env.REACT_APP_API_URL}order/create`, {
        ...storeData,
        ...data.payload,
      })
      .then(() => {
        goto('/orderlist');
      })
      .catch(() => {});
  };

  return (
    <>
      <p className='flex justify-center items-center font-bold text-xl'>
        New Order
      </p>
      <div className='flex justify-end items-center p-3'>
        <button
          onClick={createOrder}
          className='px-6 py-1 bg-gray-200 rounded-full'
        >
          Place Order
        </button>
      </div>
      <PlaceOrderlist />
    </>
  );
}

export default PlaceOrderPage;
