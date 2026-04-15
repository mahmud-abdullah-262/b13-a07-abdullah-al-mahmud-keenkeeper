import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Router from './routs/Router.jsx'
import { DataProvider } from './context/dataContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>  
      <ToastContainer position="top-center"/>
       <RouterProvider router={Router}>
      
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        
            <App />
        </Suspense>
    
    </RouterProvider>
    </DataProvider>
   
    
  </StrictMode>,
)
