import React, { useEffect } from 'react';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Orderlist from '../components/PlaceOrderlist';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

function OrderListPage() {
  const goto = useNavigate();
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}order/list`)
      .then((res) => {
        console.log('order list', res.data.data);
        setCategories({
          ...categories,
          onlineorders: res.data.data,
          uploadedorders: res.data.data,
        });
      })
      .catch(() => {});
  }, []);

  let [categories, setCategories] = useState({
    onlineorders: [
      // {
      //   id: '264126',
      //   price: 22500,
      //   quantity: 26,
      //   status: 'completed',
      //   date: '23/02/2024',
      // },
      // {
      //   id: '264127',
      //   price: 22500,
      //   quantity: 26,
      //   status: 'completed',
      //   date: '23/02/2024',
      // },
      // {
      //   id: '264127',
      //   price: 22500,
      //   quantity: 26,
      //   status: 'completed',
      //   date: '23/02/2024',
      // },
      // {
      //   id: '264127',
      //   price: 22500,
      //   quantity: 26,
      //   status: 'completed',
      //   date: '23/02/2024',
      // },
      // {
      //   id: '264127',
      //   price: 22500,
      //   quantity: 26,
      //   status: 'completed',
      //   date: '23/02/2024',
      // },
      // {
      //   id: '264127',
      //   price: 22500,
      //   quantity: 26,
      //   status: 'completed',
      //   date: '23/02/2024',
      // },
      // {
      //   id: '264127',
      //   price: 22500,
      //   quantity: 26,
      //   status: 'completed',
      //   date: '23/02/2024',
      // },
    ],
    uploadedorders: [
      // {
      //   id: '264128',
      //   price: 32345,
      //   quantity: 2,
      //   status: 'completed',
      //   date: '23/02/2024',
      // },
      // {
      //   id: '264129',
      //   price: 8488,
      //   quantity: 5,
      //   status: 'failed',
      //   date: '23/02/2024',
      // },
    ],
  });
  return (
    <>
      <div className='flex px-3'>
        <button
          onClick={() => goto('/placeorder')}
          className='text-base shadow-md bg-gray-50 p-2 border rounded-md '
        >
          <ChevronLeftIcon className=' w-5 h-5 ' />
        </button>
        <div className=' w-full flex justify-center gap-2 items-center px-3'>
          <p className='font-bold text-base'>My Orders</p>
        </div>
      </div>
      <div className='w-full max-w-md px-2 py-16 sm:px-0 mx-auto overflow-y-auto'>
        <Tab.Group>
          <Tab.List className='flex space-x-1 rounded-full bg-white p-1 border border-orange-500'>
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-full py-2.5 text-sm font-medium leading-5',
                    ' focus:outline-none ',
                    selected
                      ? 'bg-orange-500 text-white shadow'
                      : ' hover:bg-white/[0.12] hover:text-orange-600 bg-white text-orange-500'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='mt-2 '>
            {Object.values(categories).map((orders, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <ul>
                  {orders.map((order: any) => (
                    <li
                      key={order.orderid}
                      className='relative rounded-md p-3 hover:bg-gray-100'
                    >
                      <div className='border border-orange-500 rounded-lg p-4'>
                        <div className='font-bold text-base flex gap-2 justify-between items-center'>
                          <h2 className='text-orange-500'>
                            ID : # {order.orderid}
                          </h2>
                          <p className='pr-2'>₹ {order.totalprice}</p>
                        </div>
                        <div className='flex gap-2 justify-between items-center'>
                          <span className='font-semibold text-gray-500'>
                            {order.totalitems} items
                          </span>
                          <span
                            className={classNames(
                              order.status === 'completed' &&
                                'bg-green-200 text-green-600',
                              order.status === 'failed' &&
                                'bg-red-200 text-red-500',
                              'px-6 pt-0.5 pb-1 rounded-full text-sm font-bold'
                            )}
                          >
                            {order.status}
                          </span>
                        </div>
                        <h2 className='text-start font-bold text-base'>
                          {new Date(order.orderedat).toLocaleDateString()}
                        </h2>
                        <div className='flex justify-end items-center gap-3 text-sm font-semibold'>
                          <button
                            onClick={() => console.log('log')}
                            className='border-[1.5px] border-orange-500 hover:bg-orange-50 rounded-full text-orange-500 px-4 py-0.5 outline-none '
                          >
                            Reorder
                          </button>
                          <button
                            onClick={() => goto(`/orderview/${order.orderid}`)}
                            className='bg-orange-500 rounded-full text-white px-4 py-0.5 hover:bg-orange-600'
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

export default OrderListPage;
