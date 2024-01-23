import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import CentralContextComp from './Contexts/CentralContextComp'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CentralContextComp>
        <RouterProvider router={router} />
      </CentralContextComp>
    </QueryClientProvider>
  </React.StrictMode>,
)
