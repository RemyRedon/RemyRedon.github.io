import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import InitialesAnimation from '../Animation/InitialesAnimation';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

import './App.scss';

function App(): JSX.Element {
  // État qui détermine si on doit montrer l'animation
  const [showAnimation, setShowAnimation] = useState<boolean>(true);
  const [transitioningOut, setTransitioningOut] = useState<boolean>(false);

  // On utilise useLocation pour suivre les changements de route
  const location = useLocation();

  // Stocker la route actuelle dans sessionStorage
  useEffect(() => {
    // Stocker la route actuelle pour savoir si c'est une navigation interne
    sessionStorage.setItem('currentPath', location.pathname);
  }, [location]);

  // Vérifier au chargement si c'est une navigation interne
  useEffect(() => {
    const wasInternalNavigation =
      sessionStorage.getItem('internalNavigation') === 'true';

    // Si c'était une navigation interne, ne pas afficher l'animation
    if (wasInternalNavigation) {
      setShowAnimation(false);
      // Réinitialiser pour ne pas affecter les futurs rechargements
      sessionStorage.removeItem('internalNavigation');
    }
  }, []);

  // Fonction appelée pour démarrer la transition
  const handleStartTransition = (): void => {
    setTransitioningOut(true);

    // Attendre que la transition soit terminée avant de masquer complètement
    setTimeout(() => {
      setShowAnimation(false);
    }, 1100); // Durée de la transition
  };

  return (
    <div className="App">
      {/* Le contenu principal est toujours rendu, mais caché derrière l'animation */}
      <div
        className={`app-content ${
          !showAnimation || transitioningOut ? 'visible' : ''
        }`}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      {/* L'animation d'introduction */}
      {showAnimation && (
        <InitialesAnimation
          onComplete={handleStartTransition}
          transitioning={transitioningOut}
        />
      )}
    </div>
  );
}

export default App;
