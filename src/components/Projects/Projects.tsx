import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}

function Projects(): JSX.Element {
  const isDarkMode = document.body.classList.contains('dark-mode');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Personnel',
      description:
        'Mon portfolio développé avec React et Framer Motion pour mettre en valeur mes compétences et réalisations.',
      image: 'src/assets/img portfolio.PNG',
      tags: ['React', 'TypeScript', 'Framer Motion'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Blog Talkin About',
      description:
        'Une plateforme de blog moderne avec interface React, styles Tailwind et backend Symfony pour la gestion du contenu.',
      image: 'src/assets/img portfolio.PNG',
      tags: ['React', 'Tailwind CSS', 'Symfony'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Application Agenda',
      description:
        'Un outil de planification intuitive permettant de gérer rendez-vous et tâches avec fonctionnalités de notification.',
      image: 'src/assets/img portfolio.PNG',
      tags: ['React', 'TypeScript', 'CSS'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Application Météo',
      description:
        "Application météo intuitive utilisant l'API OpenWeatherMap pour des prévisions précises avec visualisation géographique.",
      image: 'src/assets/img portfolio.PNG',
      tags: ['React', 'CSS', 'API'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      description:
        'Tableau de bord interactif avec visualisation de données en temps réel pour le suivi de métriques commerciales.',
      image: 'src/assets/img portfolio.PNG',
      tags: ['React', 'TypeScript', 'Framer Motion'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      title: 'Plateforme de Cours',
      description:
        'Une application LMS permettant aux utilisateurs de suivre des cours en ligne avec suivi de progression et quiz interactifs.',
      image: 'src/assets/img portfolio.PNG',
      tags: ['React', 'TypeScript', 'CSS'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  // Simplified tags list as requested
  const allTags: string[] = [
    'all',
    'React',
    'TypeScript',
    'Framer Motion',
    'CSS',
    'Tailwind CSS',
    'Symfony',
    'API',
  ];

  const filteredProjects: Project[] =
    selectedTag === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={`projects-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="projects-title"
      >
        Mes Réalisations
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="projects-subtitle"
      >
        Découvrez les différents projets sur lesquels j'ai travaillé
      </motion.p>

      <motion.div
        className="tags-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={itemVariants}
          >
            <div className="card-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="card-image"
              />
              <div className="card-overlay">
                {/* Texte blanc sur l'overlay */}
                <div className="card-overlay-text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="card-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Voir le site"
                  >
                    {FiExternalLink({})}
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Voir le code source"
                  >
                    {FiGithub({})}
                  </a>
                </div>
              </div>
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="card-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
