import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Store = ({ product }: any) => {
  const goto = useNavigate();
  return (
    <div className='max-w-sm p-4 bg-white border border-gray-200 rounded-3xl shadow '>
      <div className='flex justify-center items-start'>
        <img
          src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/shop-icon.png'
          alt=''
          className='w-20 h-20 sm:w-28 sm:h-28'
        />
      </div>
      <div className='w-full text-start sm:text-center'>
        <h5 className='text-base  sm:text-xl font-bold  text-gray-900 '>
          {product.title}
        </h5>

        <p className='mb-1 font-normal text-base text-gray-700 '>
          {product.category} variants
        </p>
      </div>
      <div className='flex justify-end'>
        <button
          onClick={() => goto('/placeorder')}
          className='inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-full hover:bg-orange-600  '
        >
          <ChevronRightIcon className='h-5 w-5 stroke-2' />
        </button>
      </div>
    </div>
  );
};

export default Store;
