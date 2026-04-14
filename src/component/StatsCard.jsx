import React from 'react';

const StatsCard = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-center container mx-auto  border-b border-gray-200 pb-16'>
      <div className='flex flex-col items-center gap-2 shadow-xl rounded-xl py-6 px-10'>
      <p className='text-2xl font-bold text-green-800'>10</p>
      <p className='text-gray-600'>Total Friends</p>
    </div>
      <div className='flex flex-col items-center gap-2 shadow-xl rounded-xl py-6 px-10'>
      <p className='text-2xl font-bold text-green-800'>3</p>
      <p className='text-gray-600'>On Track</p>
    </div>
      <div className='flex flex-col items-center gap-2 shadow-xl rounded-xl py-6 px-10'>
      <p className='text-2xl font-bold text-green-800'>6</p>
      <p className='text-gray-600'>Need Attention</p>
    </div>
      <div className='flex flex-col items-center gap-2 shadow-xl rounded-xl py-6 px-10'>
      <p className='text-2xl font-bold text-green-800'>12</p>
      <p className='text-gray-600'>Interactions This Month</p>
    </div>
    </div>
    
  );
};

export default StatsCard;