import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/education" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Route>
        </Routes>
       
      
    </BrowserRouter>
  </StrictMode>,
)
