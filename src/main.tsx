import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import React, { lazy} from 'react';
const Layout = lazy(() => import('./layout/Layout.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const Education = lazy(() => import('./pages/Education.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const Project = lazy(() => import('./pages/Project.tsx'));
import "./i18.ts"
import { IndexProvider } from './context/IndexContext.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>

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
       
      </LanguageProvider>
      
    </BrowserRouter>
  </StrictMode>,
)
