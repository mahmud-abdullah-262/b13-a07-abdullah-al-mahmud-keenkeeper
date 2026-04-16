
import { lazy, Suspense } from 'react'
import './App.css'
import Banner from './component/Banner'
const Friends = lazy(() => import('./component/Friends'))
import Navbar from './component/Navbar'
import StatsCard from './component/StatsCard'
import Footer from './component/Footer'
import { Outlet } from 'react-router'
import Home from './component/home/Home'


function App() {
  

  return (
    <>
    <Navbar/>
    <Home></Home>
    
    <Footer/>
    
  


   
    </>
  )
}

export default App
