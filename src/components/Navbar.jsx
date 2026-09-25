import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon, SendIcon } from './Icons';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/journey', label: 'Journey' },
    { to: '/contact', label: 'Contact' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar" id="navbar">
      <div className="container">
        <Link to="/" className="nav-brand" aria-label="Prashant Thorat Home" onClick={closeMobileMenu}>
          <span>PT<span className="text-gradient">.</span></span>
          <span className="brand-badge">VIT Pune</span>
        </Link>

        <nav aria-label="Main Navigation">
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} id="navMenu">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Let's Connect CTA Button */}
          <Link 
            to="/contact" 
            className="btn btn-primary btn-sm nav-connect-btn"
            onClick={closeMobileMenu}
          >
            <span>Let's Connect</span>
            <SendIcon size={13} />
          </Link>

          {/* Theme Toggle Button */}
          <button
            id="themeToggleBtn"
            type="button"
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobileMenuBtn"
            type="button"
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
