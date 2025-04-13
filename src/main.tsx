import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout/Layout.tsx'
import React from 'react'
import Projects from './pages/Projects.tsx'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Route>
        </Routes>
       
      
    </BrowserRouter>
  </StrictMode>,
)
