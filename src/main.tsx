import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx';
import Dashboard from './layout/Dashboard.tsx'
import Cars from './pages/dashboard/Cars.tsx';
import Home from './pages/dashboard/Home.tsx';
import SearchCar from './pages/SearchCar.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/cari-mobil',
    element: <SearchCar />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <Home />
      },
      {
        path: '/dashboard/cars',
        element: <Cars />,
        children: []
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
