import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Store from './Store';
import React, { useState } from 'react';

const StorePage = () => {
  const [store, setStore] = useState([
    { title: 'Veleven Stores', category: '206' },
    { title: 'Saravana Bhavan', category: '206' },
    { title: 'Kuppuna Stores', category: '206' },
    { title: 'Priya Hotel', category: '206' },
    { title: 'Velu Stores', category: '206' },
  ]);
  return (
    <>
      <div className='flex justify-between gap-2 items-center px-3 font-bold'>
        <p> Select Store</p>
      </div>
      <div className='w-full h-full grid grid-cols-2 sm:grid-cols-3 place-content-center gap-3 p-1 sm:p-6'>
        {store.map((product, i) => (
          <Store key={i} product={product} />
        ))}
      </div>
    </>
  );
};

export default StorePage;
