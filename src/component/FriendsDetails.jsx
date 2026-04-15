import React from 'react';
import { useFriends } from '../context/dataContext';
import { useParams } from 'react-router';
import Navbar from './Navbar';
import { FaArchive, FaBell, FaHistory, FaVideo } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { IoMdText } from 'react-icons/io';
import Footer from './Footer';

const FriendsDetails =  () => {
    const {id} = useParams();
    
    const {friendsData, addItem} = useFriends();
   
    const expectedFriend = friendsData.find(f => f.id == id);
    const {name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date} = expectedFriend;
  
  return (
    <>
    <Navbar></Navbar>
    <div className='grid grid-cols-1 md:grid-cols-4 w-11/12 mx-auto my-10'>
      <div className='col-span-1 flex flex-col gap-3'>
       <div
    className='flex flex-col gap-2 items-center rounded-xl shadow-sm p-6 text-center'
    >
      <img src={picture} alt={name} className='rounded-full w-24' />          
      <h1 className='font-bold text-2xl text-gray-800'>{name}</h1>
      <div className={`badge text-white font-bold rounded-full py-3 ${status === 'on-track' ? 'badge-success' :
                    status === 'almost due' ? 'badge-warning' :
                    status === 'overdue' ? 'badge-error' : ''
                    }`}>{status}</div>
          <div className='flex flex-col items-center md:flex-row gap-2'>
                        {tags.map((t, ind) => <div key={ind} className="badge badge-soft badge-success">{t}</div>)}
                    </div>  
                    <p className='font-bold text-gray-600 italic'>{bio}</p>         
                    <p className=' text-gray-600'>{email}</p>         
    </div> 
    <div className='btn w-full text-lg text-gray-700'><FaBell /> <p>Snooze 2 weeks</p></div>
    <div className='btn w-full text-lg text-gray-700'><FaArchive /> <p>Archive</p></div>
    <div className='btn w-full text-lg text-red-500'><MdDelete /> <p>Delete</p></div>
      </div>
      <div className='col-span-1 md:col-span-3 md:ml-10 space-y-4'>
            <div className='grid grid-cols-3 gap-4'>
                    <div className='flex flex-col items-center gap-2 shadow-sm rounded-xl p-10'>
                  <p className='text-lg md:text-2xl font-bold text-green-800'>{days_since_contact}</p>
                  <p className='text-gray-600 text-center'>Days Since Contact</p>
                </div>
                  <div className='flex flex-col items-center gap-2 shadow-sm rounded-xl p-10'>
                  <p className='text-lg md:text-2xl  font-bold text-green-800'>{goal}</p>
                  <p className='text-gray-600 text-center'>Goal (Days)</p>
                </div>
                  <div className='flex flex-col items-center gap-2 shadow-sm rounded-xl p-10'>
                  <p className='text-lg md:text-2xl font-bold text-green-800 text-center'>{next_due_date}</p>
                  <p className='text-gray-600 text-center'>Next Due</p>
                </div>
          </div>
          <div className='flex flex-col gap-2 shadow-sm rounded-xl p-10'>
            <div className='flex justify-between'>
              <p className='font-medium text-green-700 '>Relationship Goal</p>
              <button className='btn'>Edit</button>
            </div>
            <p>Connect every <span className='font-bold text-gray-700'>30 days</span></p>
          </div>
          <div className='flex flex-col gap-2 shadow-sm rounded-xl p-10'>
            
          <p className='font-medium text-green-700 '>Quick Check-In</p>
              
            <div className='grid grid-cols-3 gap-4'>
               <div className='flex flex-col items-center gap-2 border border-gray-300 shadow-sm rounded-xl p-6 btn h-full'
               onClick={() => addItem({...expectedFriend, click: 'call'})}
               >
                  <p className='text-gray-600 text-4xl'><IoCall /></p>
                  <p className='text-gray-600 text-lg font-semibold'>Call</p>
                </div>
                  <div className='flex flex-col items-center gap-2 border border-gray-300 shadow-sm rounded-xl p-6 btn h-full'
                  onClick={() => addItem({...expectedFriend, click: 'text'})}
                  >
                  <p className='text-gray-600 text-4xl'><IoMdText /></p>
                  <p className='text-gray-600'>Text</p>
                </div>
                  <div className='flex flex-col items-center gap-2 border border-gray-300 shadow-sm rounded-xl p-6 btn h-full'
                  onClick={() => addItem({...expectedFriend, click: 'video'})}
                  >
                 
                  <p className='text-gray-600 text-4xl'><FaVideo /></p>
                  <p className='text-gray-600'>Video</p>
                </div>
            </div>
            
          </div>
          {/* <div className='flex flex-col gap-2 shadow-sm rounded-xl p-10'>
            <div className='flex justify-between'>
          <p className='font-medium text-green-700 '>Recent Interactions</p>
                    <button className='btn'><FaHistory />Full History</button>
            </div>
              
           <div className='flex justify-between items-center gap-2 border border-gray-300 shadow-sm rounded-xl p-6'>
            <div className='flex gap-2 items-center '>
                  <p className='text-gray-600 text-3xl'><IoCall /></p>
                  <div className='flex flex-col gap-1'>
                    <p className='text-gray-600 text-lg font-semibold'>Call</p>
                    <p className='text-gray-600 text-sm'>Asked for career advice</p>
                  </div>
            </div>
                  <p className='text-gray-600 text-sm'>Jan 28, 2026</p>
                </div>
            
          </div> */}

      </div>
    </div>
    <div className='mt-120'></div>
    <Footer/>
    </>
  );
};

export default FriendsDetails;