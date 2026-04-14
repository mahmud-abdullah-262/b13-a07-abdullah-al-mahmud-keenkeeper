import React from 'react';
import { useFriends } from '../context/dataContext';

const StatsCard = () => {
  const friendsData = useFriends().friendsData;
  const onTrackFriends = friendsData.filter( f => f.status === 'on-track');
  const almostDueFriends = friendsData.filter( f => f.status === 'almost due');
  const interactionsThisMonth = friendsData.filter( f => f.days_since_contact < 31)

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-center w-11/12 mx-auto  border-b border-gray-200 pb-16'>
      <div className='flex flex-col items-center gap-2 shadow-xl rounded-xl py-6 px-10'>
      <p className='text-2xl font-bold text-green-800'>{friendsData.length}</p>
      <p className='text-gray-600'>Total Friends</p>
    </div>
      <div className='flex flex-col items-center gap-2 shadow-xl rounded-xl py-6 px-10'>
      <p className='text-2xl font-bold text-green-800'>{onTrackFriends.length}</p>
      <p className='text-gray-600'>On Track</p>
    </div>
      <div className='flex flex-col items-center gap-2 shadow-xl rounded-xl py-6 px-10'>
      <p className='text-2xl font-bold text-green-800'>{almostDueFriends.length}</p>
      <p className='text-gray-600'>Need Attention</p>
    </div>
      <div className='flex flex-col items-center gap-2 shadow-xl rounded-xl py-6 px-10'>
      <p className='text-2xl font-bold text-green-800'>{interactionsThisMonth.length}</p>
      <p className='text-gray-600 text-center'>Interactions This Month</p>
    </div>
    </div>
    
  );
};

export default StatsCard;