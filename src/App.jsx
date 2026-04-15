
import { lazy, Suspense } from 'react'
import './App.css'
import Banner from './component/Banner'
const Friends = lazy(() => import('./component/Friends'))
import Navbar from './component/Navbar'
import StatsCard from './component/StatsCard'
import Footer from './component/Footer'


function App() {
  

  return (
    <>
    <Navbar/>
    
    <Banner></Banner>
    <StatsCard/>
    <Suspense fallback={<div className='flex justify-center'><span className="loading loading-spinner loading-xl"></span></div>}>
    <Friends/>
    </Suspense>
    <Footer/>
    
  


   
    </>
  )
}

export default App
