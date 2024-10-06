import {React, useState, useEffect} from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import './index.css'
import Users from './components/users/index'
import StoreUser from './components/users/store'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Users />,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
