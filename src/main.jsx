import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import '../styles.css'
import { useReveal } from './hooks/useReveal'
import HomePage from './pages/HomePage'
import { BlogIndex } from './pages/BlogIndex'
import { BlogPost } from './pages/BlogPost'

if (typeof window !== 'undefined') {
  window.useReveal = useReveal
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  </BrowserRouter>
)

const root = createRoot(document.getElementById('root'))
root.render(<App />)
