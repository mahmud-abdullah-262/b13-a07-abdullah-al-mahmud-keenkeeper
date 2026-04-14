import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='text-center space-y-6 my-10'>
      <h1 className='font-bold text-3xl md:text-4xl text-green-800'>Friends to keep close in your life</h1>
      <p className='text-gray-600 text-xl'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
<button className='btn bg-green-800 text-white'> <FaPlus />Add a Friend</button>
    </div>
  );
};

export default Banner;