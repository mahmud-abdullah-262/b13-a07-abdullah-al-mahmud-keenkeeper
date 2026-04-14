
import { Link } from 'react-router';
import { useFriends } from '../context/dataContext';

const Friends = () => {
  const friendsData = useFriends().friendsData
  
  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='font-bold text-3xl text-gray-800 my-10'>Your Friends</h1>
      <div className='grid grid-cols-2 md:grid-rows-3 lg:grid-cols-4 gap-4'>
       
        {friendsData.map( friend => {
                  const {id, name, picture, status, days_since_contact, tags} = friend;
                  return <Link to={`/${id}`}><div 
                  key={friend.id} 
                  
                  className='flex flex-col gap-2 items-center rounded-xl shadow-sm p-6 text-center'
                  >
                   
                     <img src={picture} alt={name} className='rounded-full w-24' />
                    
                 
                  <h1 
                  className='font-bold text-2xl text-gray-800'>
                    {name}</h1>
                    <p className='font-medium text-gray-600'>{days_since_contact} Days ago</p>
                    <div className='flex flex-col items-center md:flex-row gap-2'>
                        {tags.map((t, ind) => <div key={ind} className="badge badge-soft badge-success">{t}</div>)}
                    </div>
                  <div className={`badge text-white font-bold rounded-full py-3 ${status === 'on-track' ? 'badge-success' :
                    status === 'almost due' ? 'badge-warning' :
                    status === 'overdue' ? 'badge-error' : ''
                    }`}>{status}</div>
                  
                </div></Link>
                  
                }
                
                )}
      
       
      </div>
    </div>
  );
};

export default Friends;