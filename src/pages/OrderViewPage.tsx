import { Disclosure } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function OrderViewPage() {
  const goto = useNavigate();
  const header = [' Product details', 'stock', 'Order'];

  let { orderid } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}order/byid`, {
        params: { orderid },
      })
      .then((res) => {
        console.log('order list', res.data.data);
        const category = Object.keys(res.data.data.orders).map(
          (key: string) => {
            return {
              product: key,
              details: '',
              orders: res.data.data.orders[key],
            };
          }
        );

        setOrderView(category);
        setOrerviewdetails(res.data.data);
        // setOrerviewdetails({
        //   ...categories,
        //   onlineorders: res.data.data,
        //   uploadedorders: res.data.data,
        // });
      })
      .catch(() => {});
  }, []);

  const [orderview, setOrderView] = useState<any>([]);
  const [orderviewdetails, setOrerviewdetails] = useState<any>({});

  return (
    <div>
      <div className='flex justify-between gap-2 items-center px-3'>
        <button
          onClick={() => goto('/orderlist')}
          className='text-base shadow-md bg-gray-50 p-2 border rounded-md'
        >
          <ChevronLeftIcon className=' w-5 h-5 ' />
        </button>
        <p> Order Details</p>
        <div className='font-bold text-orange-500 text-base'>
          ID : # 234239234
        </div>
      </div>
      <div className='w-full'>
        {orderview.map((order: any, i: number) => (
          <div key={i} className='space-y-4 p-2'>
            <Disclosure defaultOpen={true}>
              {({ open }) => (
                <div className='border-2 border-orange-400 hover:border-orange-500 rounded-lg px-2 py-2'>
                  <Disclosure.Button className='flex w-full justify-between items-center text-left text-sm font-medium text-gray-90 outline-none '>
                    <span className='font-bold text-gray-900'>
                      {order.product}
                    </span>
                    <div className='p-1 bg-orange-500 rounded-lg'>
                      {' '}
                      <ChevronRightIcon
                        className={`${
                          open ? 'rotate-90 transform' : ''
                        } h-6 w-6 text-white `}
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className='mt-2 text-sm text-gray-500  pt-2 '>
                    <div className='relative overflow-x-auto shadow-md rounded-b-lg -m-2 border-t border-orange-400  '>
                      <table className='w-full text-left rtl:text-right text-gray-500 '>
                        <thead className='text-xs text-gray-900 uppercase bg-gray-50  '>
                          <tr>
                            {header.map((title, i) => (
                              <th key={i} scope='col' className='px-6 py-3'>
                                {title}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className=''>
                          {order.orders.map((order: any, i: any) => (
                            <tr
                              className='bg-white border mx-2 font-bold'
                              key={i}
                            >
                              <td className='px-6 py-4'>
                                <div className=' text-base text-gray-800'>
                                  {order.productname} ({order.size} )
                                </div>
                                <div className='text-lime-600 '>
                                  {' '}
                                  Price : {order.price}
                                </div>
                              </td>
                              <td className=' px-6 py-4 '>{order.stock}</td>

                              <td className='px-6 py-4'>{order.order}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
      <div className='hidden  px-4 bg-green-700  w-full  sm:flex justify-center z-10 text-gray-100 -ml-0.5'>
        <div className='max-w-5xl'>
          <div className='w-full flex justify-between gap-1 font-semibold text-base text-start p-1'>
            <p className=''>
              {new Date(orderviewdetails.orderedat).toLocaleDateString() as any}
            </p>
            <p className='text-xl'>Total</p>
          </div>
          <div className='w-full flex justify-between gap-1 font-semibold text-base text-start p-1'>
            <p className=''>{orderviewdetails.totalitems} Items</p>
            <p className='text-xl'>₹ {orderviewdetails.totalprice}</p>
          </div>
        </div>
      </div>
      <div className='sm:hidden px-4 bg-green-700 fixed bottom-0 w-full  flex justify-center z-10 text-gray-100 -ml-0.5'>
        <div className='max-w-5xl'>
          <div className='w-full flex justify-between gap-1 font-semibold text-base text-start p-1'>
            <p className=''>
              {' '}
              {new Date(orderviewdetails.orderedat).toLocaleDateString() as any}
            </p>
            <p className='text-xl'>Total</p>
          </div>
          <div className='w-full flex justify-between gap-1 font-semibold text-base text-start p-1'>
            <p className=''>{orderviewdetails.totalitems} Items</p>
            <p className='text-xl'>₹ {orderviewdetails.totalprice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderViewPage;
