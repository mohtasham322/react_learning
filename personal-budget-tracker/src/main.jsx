import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@heroicons/react/24/outline';
import './index.css';
import Home from './pages/home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> ,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
