import { createRoot } from 'react-dom/client'
import {HashRouter,Routes,Route} from "react-router-dom"
import './index.css'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </HashRouter>
)
