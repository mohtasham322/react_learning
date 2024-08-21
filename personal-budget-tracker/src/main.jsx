import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet, Link } from "react-router-dom";
import './index.css'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link to={'/login'}>login</Link> ,
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
