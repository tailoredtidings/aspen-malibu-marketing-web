import React, { Suspense, lazy, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate } from 'react-router-dom'
import '../styles.css'
import { useReveal } from './hooks/useReveal'
import HomePage from './pages/HomePage'
import { getServiceBySlug } from './lib/services'

if (typeof window !== 'undefined') {
  window.useReveal = useReveal
}

const BlogIndex = lazy(() => import('./pages/BlogIndex').then(m => ({ default: m.BlogIndex })))
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })))
const BlogTagPage = lazy(() => import('./pages/BlogTagPage').then(m => ({ default: m.BlogTagPage })))
const ServicePage = lazy(() => import('./pages/ServicePage').then(m => ({ default: m.ServicePage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageLoader() {
  return <div className="page-loader" aria-hidden="true" />
}

function ServiceRoute() {
  const { slug } = useParams()
  if (!getServiceBySlug(slug)) return <Navigate to="/404" replace />
  return <ServicePage slug={slug} />
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/tag/:tag" element={<BlogTagPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/services/:slug" element={<ServiceRoute />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)

const root = createRoot(document.getElementById('root'))
root.render(<App />)
