import '../styles/Projets.css';
import Placeholder from '../assets/placeholder.png';

/* img/ArtConnect_640.jpg */
/* img/GreenPanier_640.jpg */
/* img/TimeTrackr_640.jpg */
/* img/DocuFlow_640.jpg */
/* img/PortfolioV1_640.jpg */
const Projets = ({arrProjets}) => {
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