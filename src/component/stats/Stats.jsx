import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Stats = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-4xl font-bold text-red-500'>Stats</h1>
      <Footer/>
    </div>
  );
};

export default Stats;