import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

// Importation des images
import htmlLogo from '../../assets/html-logo.svg';
import cssLogo from '../../assets/css-logo.svg';
import jsLogo from '../../assets/js-logo.svg';
import reactLogo from '../../assets/react-logo.svg';
import typescriptLogo from '../../assets/typescript.svg';
import reduxLogo from '../../assets/redux.svg';
import sassLogo from '../../assets/sass.svg';
import tailwindLogo from '../../assets/tailwind.svg';
import phpLogo from '../../assets/php-logo.svg';
import mysqlLogo from '../../assets/mysql.svg';
import mongodbLogo from '../../assets/mongodb.svg';
import gitLogo from '../../assets/git-bash.svg';
import githubLogo from '../../assets/github-logo.svg';
import dockerLogo from '../../assets/docker.svg';
import vsCodeLogo from '../../assets/vsCode.svg';
import profilImage from '../../assets/profil.jpg';

interface TechItem {
  name: string;
  image: string;
}

const TechCategory = ({
  title,
  techs,
}: {
  title: string;
  techs: TechItem[];
}) => (
  <div className="tech-category">
    <h3 className="category-title">{title}</h3>
    <div className="logos-container">
      {techs.map((tech, index) => (
        <div className="tech-logo" key={index}>
          <div className="logo-item">
            <img src={tech.image} alt={tech.name} className="logo-image" />
          </div>
          <span className="tech-name">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Déclencher l'animation d'entrée après un court délai
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  // Fonction de navigation personnalisée
  const handleNavigation = (path: string): void => {
    // Marquer cette navigation comme interne
    sessionStorage.setItem('internalNavigation', 'true');
    // Naviguer vers la page
    navigate(path);
  };

  // Définir les technologies avec leur nom et chemin d'image
  const frontendTechs: TechItem[] = [
    { name: 'HTML5', image: htmlLogo },
    { name: 'CSS3', image: cssLogo },
    { name: 'JavaScript', image: jsLogo },
    { name: 'React', image: reactLogo },
    { name: 'TypeScript', image: typescriptLogo },
    { name: 'Redux', image: reduxLogo },
    { name: 'Sass', image: sassLogo },
    { name: 'Tailwind CSS', image: tailwindLogo },
  ];

  const backendTechs: TechItem[] = [
    { name: 'PHP', image: phpLogo },
    { name: 'MySQL', image: mysqlLogo },
    { name: 'MongoDB', image: mongodbLogo },
  ];

  const toolsTechs: TechItem[] = [
    { name: 'Git', image: gitLogo },
    { name: 'GitHub', image: githubLogo },
    { name: 'Docker', image: dockerLogo },
    { name: 'VS Code', image: vsCodeLogo },
  ];

  return (
    <div className={`home-container ${isVisible ? 'visible' : ''}`}>
      {/* Section de présentation */}
      <header className="intro-section">
        <div className="intro-content">
          <div className="text-content">
            <h1 className="intro-title">Bonjour, je suis RÉMY REDON</h1>
            <h2 className="intro-subtitle">Développeur Full Stack - React</h2>
            <p className="intro-description">
              Passionné par la création de solutions web modernes, intuitives et
              performantes. Explorez mes projets ou contactez-moi pour trouver
              votre solution numérique !
            </p>
            <div className="action-buttons">
              <button
                onClick={() => handleNavigation('/projects')}
                className="primary-button"
              >
                Voir mes projets
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className="secondary-button"
              >
                Me contacter
              </button>
            </div>
          </div>
          <div className="profile-image-container">
            <div className={`profile-image ${isVisible ? 'animate' : ''}`}>
              <img src={profilImage} alt="Rémy Redon" />
            </div>
          </div>
        </div>
      </header>

      {/* Section des technologies */}
      <section className="technologies-section">
        <h2 className="section-title">Technologies que j'utilise</h2>
        <div className="tech-categories">
          <TechCategory title="Front-end" techs={frontendTechs} />
          <TechCategory title="Back-end" techs={backendTechs} />
          <TechCategory title="Outils & Autres" techs={toolsTechs} />
        </div>
      </section>
    </div>
  );
}

export default Home;
