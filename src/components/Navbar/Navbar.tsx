import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.scss';

const NavBar = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction de navigation personnalisée
  const handleNavigation = (path: string): void => {
    // Ne pas naviguer si on est déjà sur cette page
    if (location.pathname === path) return;

    // Fermer le menu sur mobile après navigation
    setMenuOpen(false);

    // Marquer cette navigation comme interne
    sessionStorage.setItem('internalNavigation', 'true');
    // Naviguer vers la page
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div
          className="logo"
          onClick={() => handleNavigation('/')}
          onMouseEnter={() => setHoveredItem('logo')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <span className={hoveredItem === 'logo' ? 'gradient-text' : ''}>
            RR
          </span>
        </div>

        {/* Hamburger pour mobile */}
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <button
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => handleNavigation('/')}
            onMouseEnter={() => setHoveredItem('home')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={hoveredItem === 'home' ? 'gradient-text' : ''}>
              Accueil
            </span>
          </button>

          <button
            className={location.pathname === '/projects' ? 'active' : ''}
            onClick={() => handleNavigation('/projects')}
            onMouseEnter={() => setHoveredItem('projects')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={hoveredItem === 'projects' ? 'gradient-text' : ''}>
              Projets
            </span>
          </button>

          <button
            className={location.pathname === '/contact' ? 'active' : ''}
            onClick={() => handleNavigation('/contact')}
            onMouseEnter={() => setHoveredItem('contact')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={hoveredItem === 'contact' ? 'gradient-text' : ''}>
              Contact
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
