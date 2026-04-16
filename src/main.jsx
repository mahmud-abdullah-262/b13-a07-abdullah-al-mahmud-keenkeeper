import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Outlet, RouterProvider } from 'react-router'
import Router from './routs/Router.jsx'
import { DataProvider } from './context/dataContext.jsx'
import { ToastContainer } from 'react-toastify'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>  
      <ToastContainer position="top-center"/>
       <RouterProvider router={Router}>
      
      
    
    </RouterProvider>
    </DataProvider>
   
    
  </StrictMode>,
)
