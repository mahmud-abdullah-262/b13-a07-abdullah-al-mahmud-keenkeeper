import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';

const App = lazy(() => import('../App'));
const Timeline = lazy(() => import('../component/timeline/Timeline'));
const Stats = lazy(() => import('../component/stats/Stats'));
const FriendsDetails = lazy(() => import('../component/FriendsDetails'));


const Router = createBrowserRouter([
  {path: '/', element: <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><span className="loading loading-spinner loading-xl"></span></div>}>
   <App></App>
  </Suspense>},
  {path: '/timeline', element: <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><span className="loading loading-spinner loading-xl"></span></div>}>
   <Timeline></Timeline>
  </Suspense>},
  {path: '/stats', element: <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><span className="loading loading-spinner loading-xl"></span></div>}>
   <Stats></Stats>
  </Suspense>},
  {path: '/:id', element: <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><span className="loading loading-spinner loading-xl"></span></div>}>
   <FriendsDetails></FriendsDetails>
  </Suspense>},
])

export default Router;