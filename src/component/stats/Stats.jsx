import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import AnaliticChert from '../AnaliticChert';

const Stats = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <h1 className='font-bold text-3xl text-gray-800 mt-10 w-11/12 mx-auto'>Friendship Analytics</h1>
      <div className='w-11/12 mx-auto flex justify-center items-center py-10'>

      <AnaliticChert/>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Stats;