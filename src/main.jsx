import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import CentralContextComp from './Contexts/CentralContextComp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CentralContextComp>
      <RouterProvider router={router} />
    </CentralContextComp>
  </React.StrictMode>,
)
