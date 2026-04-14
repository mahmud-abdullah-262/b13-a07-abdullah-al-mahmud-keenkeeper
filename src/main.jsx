import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Router from './routs/Router.jsx'
import { DataProvider } from './context/dataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
       <RouterProvider router={Router}>
      <App />
    </RouterProvider>
    </DataProvider>
   
    
  </StrictMode>,
)
