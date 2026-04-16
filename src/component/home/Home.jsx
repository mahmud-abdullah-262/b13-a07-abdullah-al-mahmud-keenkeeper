import React, { lazy, Suspense } from 'react';


const Friends = lazy(() => import('../Friends'));
const Banner = lazy(() => import('../Banner'));
const StatsCard = lazy(() => import('../StatsCard'));


const Home = () => {
  return (
    <div>
    
    <Suspense fallback={<div className='flex justify-center'><span className="loading loading-spinner loading-xl"></span></div>}>
    <Banner></Banner>
    <StatsCard/>
    <Friends/>

    </Suspense>
    </div>
  );
};

export default Home;