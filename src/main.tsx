import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Layout from './layout/Layout.tsx'
import React from 'react'
import Projects from './pages/Projects.tsx'
import Education from './pages/Education.tsx'
import Contact from './pages/Contact.tsx'
import Project from './pages/Project.tsx'
import { IndexProvider } from './IndexContext.tsx'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <IndexProvider>

        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:projectId" element={<Project />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </IndexProvider>
       
      
    </BrowserRouter>
  </StrictMode>,
)
