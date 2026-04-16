import React, { Children, lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import ErrorPage from '../component/errorPage/ErrorPage';

const Root = lazy(() => import('../component/root/Root'));
const Home = lazy(() => import('../component/home/Home'));
const App = lazy(() => import('../App'));
const Timeline = lazy(() => import('../component/timeline/Timeline'));
const Stats = lazy(() => import('../component/stats/Stats'));
const FriendsDetails = lazy(() => import('../component/FriendsDetails'));


const Router = createBrowserRouter([
  {path: '/', 
  element: <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><span className="loading loading-spinner loading-xl"></span></div>}>
   <Root></Root>
  </Suspense>,
  errorElement: <ErrorPage />,
  children: [
    {index: true, element: <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><span className="loading loading-spinner loading-xl"></span></div>}>
   <Home></Home>
  </Suspense>},
    {path: '/timeline', element: <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><span className="loading loading-spinner loading-xl"></span></div>}>
   <Timeline></Timeline>
  </Suspense>},
  {path: '/stats', element: <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><span className="loading loading-spinner loading-xl"></span></div>}>
   <Stats></Stats>
  </Suspense>},
  {path: '/:id', element: <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><span className="loading loading-spinner loading-xl"></span></div>}>
   <FriendsDetails></FriendsDetails>
  </Suspense>},]
},
  
  
  
])

export default Router;

