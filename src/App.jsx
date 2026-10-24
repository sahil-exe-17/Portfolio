import React, { useState, useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/portfolio.css';
import { ThemeProvider } from './context/ThemeContext';
import MainPortfolio from './components/MainPortfolio';

const LoadingScreen = lazy(() => import('./components/LoadingScreen'));
const MyWorksPage = lazy(() => import('./components/MyWorksPage'));

export default function App() {
  const [isLoading, setIsLoading] = useState(() => window.innerWidth > 768);
  const lenisRef = useRef(null);

  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Interactive Ping-Pong & Marquee Loading Screen */}
        {isLoading && (
          <Suspense fallback={null}>
            <LoadingScreen
              onLoaded={() => setIsLoading(false)}
              lenisInstance={lenisRef.current}
            />
          </Suspense>
        )}

        {/* Main App Container */}
        <main className={`main-body ${!isLoading ? 'main-active' : ''}`}>
          <Suspense fallback={<div className="loading-fallback" />}>
            <Routes>
              <Route
                path="/"
                element={<MainPortfolio lenisRef={lenisRef} isLoading={isLoading} />}
              />
              <Route path="/myworks" element={<MyWorksPage />} />
              {/* Catch-all redirects back to home */}
              <Route
                path="*"
                element={<MainPortfolio lenisRef={lenisRef} isLoading={isLoading} />}
              />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}
