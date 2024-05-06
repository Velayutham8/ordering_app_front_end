import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Table from './Table';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../utils/store';

const PlaceOrderlist = () => {
  const data = [
    {
      productid: '1',
      productname: 'Rava Dosai Mix',
      size: '234',
      price: 200,
      stock: 0,
      order: 0,
    },
    {
      productid: '2',
      productname: 'SPL Rava Dosai Mix',
      size: '234',
      price: 200,
      stock: 0,
      order: 0,
    },
    {
      productid: '3',
      productname: 'Ragi Dosai Mix',
      size: '234',
      price: 200,
      stock: 0,
      order: 0,
    },
  ];

  const neworder = [
    {
      category: 'idly mix',
      details: '',
      data,
    },
    {
      category: 'dosa',
      details: '',
      data,
    },
    {
      category: 'Mavu',
      details: '',
      data,
    },
    {
      category: 'Chappati',
      details: '',
      data,
    },
    {
      category: 'Biriyani',
      details: '',
      data,
    },
  ];

  const [productData, setProductData] = useState(neworder);
  const storeData = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const stockAdd = (productid: any, category: any) => {
    console.log('productid', { productid, category });

    const data = productData;

    const categoryIndex = data.findIndex((i: any) => i.category === category);

    console.log('category', categoryIndex);

    const productIndux = data[categoryIndex].data.findIndex(
      (i: any) => i.productid === productid
    );

    console.log('productIndux', data[categoryIndex].data[productIndux]);

    data[categoryIndex].data[productIndux].stock += 1;

    if (data[categoryIndex].data[productIndux].order === 0) {
      data[categoryIndex].data[productIndux].order += 1;
    }
    console.log('ssss', data);

    setProductData(data);

    dispatch(
      setOrders({ [category]: productData[categoryIndex].data[productIndux] })
    );
  };
  const stockDelete = (productid: any) => {
    // const productIndux = productData.findIndex(
    //   (i) => i.productid === productid
    // );
    // productData[productIndux].stock -= 1;
    // setProductData([...productData]);
  };
  const OrderAdd = (productid: string, category: string) => {
    console.log('productid', { productid, category });

    const data = productData;

    const categoryIndex = data.findIndex((i: any) => i.category === category);

    console.log('category', categoryIndex);

    const productIndux = data[categoryIndex].data.findIndex(
      (i: any) => i.productid === productid
    );

    console.log('productIndux', data[categoryIndex].data[productIndux]);

    data[categoryIndex].data[productIndux].order += 1;

    if (data[categoryIndex].data[productIndux].stock === 0) {
      data[categoryIndex].data[productIndux].stock += 1;
    }
    console.log('ssss', data);

    setProductData(data);

    dispatch(
      setOrders({ [category]: productData[categoryIndex].data[productIndux] })
    );
  };
  const OrderDelete = (productid: any) => {
    // const productIndux = productData.findIndex(
    //   (i) => i.productid === productid
    // );
    // productData[productIndux].order -= 1;
    // setProductData([...productData]);
  };
  return (
    <div className='w-full pt-1'>
      {/* {JSON.stringify(productData)} */}
      {productData.map((order, i) => (
        <div key={i} className='space-y-4 p-2'>
          <Disclosure>
            {({ open }) => (
              <div className='border-2 border-orange-400 hover:border-orange-500 rounded-lg px-2 py-2'>
                <Disclosure.Button className='flex w-full justify-between items-center text-left text-sm font-medium text-gray-90 outline-none '>
                  <span className='font-bold text-gray-900'>
                    {order.category}
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
                  <Table
                    data={order.data}
                    OrderAdd={(id: string) => OrderAdd(id, order.category)}
                    OrderDelete={(id: string) => OrderDelete(id)}
                    stockAdd={(id: string) => stockAdd(id, order.category)}
                    stockDelete={(id: string) => stockDelete(id)}
                  />
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

export default PlaceOrderlist;
