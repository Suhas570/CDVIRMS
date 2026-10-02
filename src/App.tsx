import React, { useState, useEffect } from 'react';
import type { Page } from './types';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { Tutorials } from './pages/Tutorials';
import { News } from './pages/News';
import { Resources } from './pages/Resources';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { NotificationBar } from './components/features/NotificationBar';

export const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top upon page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'features':
        return <Features onNavigate={setCurrentPage} />;
      case 'tutorials':
        return <Tutorials onNavigate={setCurrentPage} />;
      case 'news':
        return <News onNavigate={setCurrentPage} />;
      case 'resources':
        return <Resources onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app-root">
      {/* Smooth custom interactive pointer */}
      <CustomCursor />

      {/* WCAG Accessible skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Scrolling Notification Ticker */}
      <NotificationBar onNavigate={setCurrentPage} />

      {/* Primary Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Main Content Area */}
      <main id="main-content" role="main">
        {renderPage()}
      </main>

      {/* Government Footer */}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export const App: React.FC = () => {
  return <AppContent />;
};

export default App;
