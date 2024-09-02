import {React, useState, useEffect} from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios';
import './index.css'
import Users from './components/users/index'
import StoreUser from './components/users/store'

function App()
{
  return(
  // <Users />
  <StoreUser />
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
