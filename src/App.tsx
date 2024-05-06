import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import React from 'react';
import OrderListPage from './pages/OrderListPage.tsx';
import OrderViewPage from './pages/OrderViewPage.tsx';
import PlaceOrderPage from './pages/PlaceOrderPage.tsx';
import StorePage from './pages/StorePage.tsx';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import Home from './pages/Home.tsx';

function App() {
  return (
    <div className='flex flex-col  justify-between text-center  w-auto overflow-y-auto '>
      <div className='sm:p-4 sm:m-3'>
        <Home>
          <>
            <Routes>
              <Route path='/' element={<StorePage />} />
              <Route path='/store' element={<StorePage />} />
              <Route path='/placeorder' element={<PlaceOrderPage />} />
              <Route path='/orderlist' element={<OrderListPage />} />
              <Route path='/orderview/:orderid' element={<OrderViewPage />} />
            </Routes>
          </>
        </Home>
      </div>

      <ul className='sm:hidden p-3 bg-gray-300 fixed bottom-0 sm:bottom-9 w-full sm:max-w-7xl flex justify-around items-center gap-3  '>
        <li>
          <Link to='/store'>
            <svg
              className='w-5 h-5 fill-gray-400'
              version='1.1'
              id='Capa_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 495.398 495.398'
              xmlSpace='preserve'
            >
              <path
                d='M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
				v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
				c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
				c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z'
              />
              <path
                d='M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
				c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
				c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z'
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link to='/placeorder'>
            <div className=' bg-gray-400 rounded-full w-6 h-6'>
              <svg
                className='stroke-gray-100'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 12L12 16M12 16L16 12M12 16V8M22 12C22 17.5228 17.5228 22 12'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </Link>
        </li>
        <li className='bg-gray-400 p-1 rounded-full'>
          <Link to='/placeorder'>
            <svg
              className='w-5 h-5 '
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              {/* <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  /> */}

              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z'
                  className='fill-gray-100'
                  fillRule='evenodd'
                  clipRule='evenodd'
                />{' '}
              </g>
            </svg>{' '}
          </Link>
        </li>
        <li>
          <Link to='/orderlist'>
            <BriefcaseIcon className='w-6 h-6 stroke-2  text-gray-500' />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
