import '../styles/Projets.css';
import Placeholder from '../assets/placeholder.png';

const arrProjets = [
    {
      title: "ArtConnect",
      featuredImage: "", /* img/ArtConnect_640.jpg */
      description: "Plateforme de mise en relation entre artistes indépendants et lieux d'exposition. Gestion des profils, des événements et messagerie intégrée.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      demoLink: "https://demo-artconnect.vercel.app",
      codeLink: "https://github.com/username/artconnect"
    },
    {
      title: "GreenPanier",
      featuredImage: "", /* img/GreenPanier_640.jpg */
      description: "Site e-commerce pour une coopérative bio locale, avec commande en ligne, espace adhérent et gestion des producteurs.",
      technologies: ["WordPress", "WooCommerce", "PHP", "ACF", "CSS"],
      demoLink: "https://greenpanier-demo.fr",
      codeLink: "https://github.com/username/greenpanier"
    },
    {
      title: "TimeTrackr",
      featuredImage: "", /* img/TimeTrackr_640.jpg */
      description: "Application web de suivi du temps pour freelances, avec génération de rapports et export PDF des temps de travail.",
      technologies: ["Vue.js", "Firebase", "Chart.js", "SCSS"],
      demoLink: "https://timetrackr.app",
      codeLink: "https://github.com/username/timetrackr"
    },
    {
      title: "DocuFlow",
      featuredImage: "", /* img/DocuFlow_640.jpg */
      description: "Outil de gestion documentaire interne pour PME, avec authentification, tri, recherche plein texte et gestion des accès par rôles.",
      technologies: ["Laravel", "Blade", "MySQL", "Bootstrap"],
      demoLink: "https://docuflow-demo.fr",
      codeLink: "https://github.com/username/docuflow"
    },
    {
      title: "Portfolio V1",
      featuredImage: "", /* img/PortfolioV1_640.jpg */
      description: "Première version de mon portfolio, simple et statique, avec animations légères et navigation fluide.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://v1-portfolio.vercel.app",
      codeLink: "https://github.com/username/portfolio-v1"
    }
  ];

const Projets = () => {
    return (
        <>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Projets</h2>
                </div>
              </div>
              <div className="row">
                  {arrProjets.map((projet) => (
                        <div key={projet.title} className="col-4">
                            <img
                              src={projet.featuredImage && projet.featuredImage.trim() !== "" ? projet.featuredImage : Placeholder}
                              alt={projet.title}
                            />
                            <h3>{projet.title}</h3>
                            <p>{projet.description}</p>
                            <ul>
                              {projet.technologies.map((technologie) => (<li key={technologie}>{technologie}</li>))}
                            </ul>
                            <a href={projet.demoLink} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                            <br />
                            <a href={projet.codeLink} target="_blank" rel="noopener noreferrer">Voir le code</a>
                        </div>
                    ))}
              </div>
            </div>
        </>
    );
};

export default Projets;