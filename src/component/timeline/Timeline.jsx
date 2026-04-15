import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useFriends } from '../../context/dataContext';

const Timeline = () => {
   const {friendsData, addItem, item} = useFriends();
  console.log(item)
  console.log(friendsData)
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-4xl text-red-300 font-bold'>timeline</h1>
      <Footer/>
    </div>
  );
};

export default Timeline;