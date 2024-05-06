import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const Table = ({ data, stockDelete, stockAdd, OrderAdd, OrderDelete }: any) => {
  const header = [' Product details', 'stock', 'Order'];

  return (
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
          {/* {JSON.stringify(data)} */}
          {data.map((order: any, i: any) => (
            <tr className='bg-white border mx-2   ' key={i}>
              <td className='px-6 py-4'>
                {order.productname} ({order.size})
              </td>
              <td className=' px-6 py-4 '>
                <span className='flex gap-1 items-center'>
                  <span
                    onClick={() => stockDelete(order.productid)}
                    className='px-1 py-0.5 border border-orange-500 rounded-full cursor-pointer'
                  >
                    <MinusIcon className='w-4 h-4 text-orange-500' />
                  </span>
                  <span className='border border-gray-200 rounded-md px-2 py-0.5'>
                    {order.stock}
                  </span>
                  <span
                    onClick={() => stockAdd(order.productid)}
                    className='px-1 py-0.5 bg-orange-500 rounded-full cursor-pointer'
                  >
                    <PlusIcon className='w-4 h-4 text-white' />
                  </span>
                </span>
              </td>

              <td className='px-6 py-4'>
                <span className='flex gap-1 items-center'>
                  <span
                    onClick={() => OrderDelete(order.productid)}
                    className='px-1 py-0.5 border border-orange-500 rounded-full cursor-pointer'
                  >
                    <MinusIcon className='w-4 h-4 text-orange-500' />
                  </span>
                  <span className='border border-gray-200 rounded-md px-2 py-0.5'>
                    {order.order}
                  </span>
                  <span
                    onClick={() => OrderAdd(order.productid)}
                    className='px-1 py-0.5 bg-orange-500 rounded-full cursor-pointer'
                  >
                    <PlusIcon className='w-4 h-4 text-white' />
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
