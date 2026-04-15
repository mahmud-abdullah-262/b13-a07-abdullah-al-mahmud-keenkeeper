import React from 'react';
import logo from '../../public/logo.png'
import { Link, NavLink } from 'react-router';
import { IoHome } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa';
import { TfiStatsUp } from 'react-icons/tfi';
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className='flex flex-col gap-6 md:flex-row justify-between items-center w-11/12 mx-auto'>
        <div className="flex-1 mt-6 md:mt-0">
          <Link to='/'><img src={logo} alt="" /></Link>
    
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <NavLink 
      className={({isActive}) => `flex items-center gap-2 font-bold px-4 py-2 rounded-lg 
        ${ isActive ? ' bg-green-800 text-white ' : 'font-bold text-gray-500'} ` } 
      to='/'> 
      <IoHome /> Home</NavLink>
      <NavLink 
      className={({isActive}) => `flex items-center gap-2 font-bold px-4 py-2 rounded-lg 
        ${ isActive ? ' bg-green-800 text-white ' : 'font-bold text-gray-500'} ` } 
      to='/timeline'> <FaRegClock />Timeline</NavLink>
      <NavLink 
      className={({isActive}) => `flex items-center gap-2 font-bold px-4 py-2 rounded-lg 
        ${ isActive ? ' bg-green-800 text-white ' : 'font-bold text-gray-500'} ` } 
      to='/stats'> <TfiStatsUp /> Stats</NavLink>
     
    </ul>
  </div>
      </div>
  
</div>
  );
};

export default Navbar;