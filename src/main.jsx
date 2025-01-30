import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './Create-trip/index.jsx'
import Header from './Components/custom/Header'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
