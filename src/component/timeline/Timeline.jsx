import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useFriends } from '../../context/dataContext';
import call from '../../../public/call.png'
import text from '../../../public/text.png'
import video from '../../../public/video.png'

const Timeline = () => {
  const today = new Date().toLocaleDateString();
  const { item } = useFriends();
  

 
  const [sortby, setSortby] = useState('All')
  const sortedData = sortby === 'All' ? item : item.filter(i => i.click === sortby.toLowerCase());
  const handleSort = (value) => {
    setSortby(value);
    document.activeElement.blur();
  }
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <h1 className='font-bold text-3xl text-gray-800 mt-10 w-11/12 mx-auto'>Timeline</h1>
      <div className='w-11/12 mx-auto mb-6'>
        <div className="dropdown dropdown-start ">
          <div tabIndex={0} role="button" className="btn m-1">Sort By : {sortby} </div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => { handleSort('All')} }  ><a>All</a></li>
            <li onClick={() => { handleSort('Call')} }  ><a>Call</a></li>
            <li onClick={() => { handleSort('Text')}} ><a>Text</a></li>
            <li onClick={() => { handleSort('Video')}} ><a>Video</a></li>
          </ul>
        </div>
      </div>
     
      <div className='w-11/12 mx-auto mb-10'>
         {sortedData.map((i, ind) => <div key={ind} className='flex justify-between items-center gap-2 border border-gray-300 shadow-sm rounded-xl p-6 mt-2'>
      
                  <div className='flex gap-2 items-center '>
                   {
                    <img 
                     src={i.click === 'call' ?  call : 
                          i.click === 'text' ? text :
                          i.click === 'video' ? video : ''
                          }
                     alt="" />
                   }
                        
                        <div className='flex flex-col gap-1'>
                          <p className='text-gray-600 text-lg font-semibold'>
                            {i.click === 'call' ?  'Call' : 
                          i.click === 'text' ? "Text":
                          i.click === 'video' ? 'Video': ''} with <span>{i.name}</span></p>
                         <p className='text-gray-600 text-sm'>{today}</p>
                        </div>
                  </div>
                        
                  </div> )

      }
      </div>
     
      {/* <Footer/> */}
    </div>
  );
};

export default Timeline;