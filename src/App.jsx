import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/portfolio.css';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import MainPortfolio from './components/MainPortfolio';
import MyWorksPage from './components/MyWorksPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(() => window.innerWidth > 768);
  const lenisRef = useRef(null);

  return (
    <BrowserRouter>
      {/* Custom hardware-accelerated magnetic cursor */}
      <CustomCursor />

      {/* Interactive Ping-Pong & Marquee Loading Screen */}
      {isLoading && (
        <LoadingScreen
          onLoaded={() => setIsLoading(false)}
          lenisInstance={lenisRef.current}
        />
      )}

      {/* Main App Container */}
      <main className={`main-body ${!isLoading ? 'main-active' : ''}`}>
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
      </main>
    </BrowserRouter>
  );
}
