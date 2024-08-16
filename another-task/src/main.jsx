import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const App = ()=>{
  return <>
  <h1 className='text-4xl font-bold underline text-yellow'>Hello World</h1>
  </>
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
</StrictMode>
)
