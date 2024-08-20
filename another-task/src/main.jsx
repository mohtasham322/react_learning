import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import './index.css'

const App = ()=>{
  return <>
  <Home/>
  </>
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
</StrictMode>
)
