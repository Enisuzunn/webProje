import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import UIKit from './pages/UIKit.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        {/* ThemeProvider tüm sayfaları sarar — dark class buradan yayılır */}
        <ThemeProvider>
          <Routes>
            <Route path="/"       element={<App />} />
            <Route path="/ui-kit" element={<UIKit />} />
          </Routes>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
)

