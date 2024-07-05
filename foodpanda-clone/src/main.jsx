import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import ErrorPage from './pages/error';
import Contacts from './pages/contacts';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children: [
      {
        path:'/',
        element:<Home />,
      },
      {
        path:'/restaurants',
        element:<Restaurants />,
      },
      {
        path:'/contact',
        element:<Contacts />,
      },
      {
        path:'*',
        element:<ErrorPage />,
      }
    ],
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
