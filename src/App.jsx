import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

// React Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import JourneyPage from './pages/JourneyPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pt_portfolio_theme') || 'dark';
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pt_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  }, []);

  return (
    <Router>
      <div className="portfolio-app">
        {/* Scroll To Top upon route change */}
        <ScrollToTop />

        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Main Navigation with React Router NavLinks */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Dynamic Route Pages */}
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onOpenModal={setSelectedProject} onShowToast={showToast} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage onShowToast={showToast} />} 
            />
            <Route 
              path="/skills" 
              element={<SkillsPage />} 
            />
            <Route 
              path="/projects" 
              element={<ProjectsPage onOpenModal={setSelectedProject} />} 
            />
            <Route 
              path="/journey" 
              element={<JourneyPage />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage onShowToast={showToast} />} 
            />
            <Route 
              path="*" 
              element={<NotFoundPage />} 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Project & Patent Detail Modal */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

        {/* Floating Notifications */}
        <Toast toasts={toasts} />
      </div>
    </Router>
  );
}
