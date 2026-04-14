import React from 'react';
import { useFriends } from '../context/dataContext';

const Friends = () => {
  const friendsData = useFriends().friendsData
  
  return (
    <div className='container mx-auto'>
      <h1 className='font-bold text-3xl text-gray-800 my-10'>Your Friends</h1>
      <div className='grid grid-cols-2 md:grid-rows-3 lg:grid-cols-4 gap-4'>
        {friendsData.map( friend => {
          const {name, picture, status, days_since_contact, tags} = friend;
          return <div 
          key={friend.id}
          className='flex flex-col gap-2 items-center rounded-xl shadow-sm p-6 text-center'
          >
          <img src={picture} alt={name} className='rounded-full w-24' />
          <h1 
          className='font-bold text-2xl text-gray-800'>
            {name}</h1>
            <p className='font-medium text-gray-600'>{days_since_contact} Days ago</p>
            <div className='flex gap-2'>
                {tags.map((t, ind) => <div key={ind} className="badge badge-soft badge-success">{t}</div>)}
            </div>
          
        </div>
        }
        
        )}
      </div>
    </div>
  );
};

export default Friends;