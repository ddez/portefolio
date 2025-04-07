import "../styles/Accueil.css"; 
import Banner from "./Banner";

const Accueil = ({siteTitle, author, authorFunction}) => {
  return (
    <>
      {/* TODO : <Banner />*/}
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="dd-title">{siteTitle}</h1>
            <h2 className="dd-subtitle">{author} - {authorFunction}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 dd-text">
            <p>👋 Bienvenue ! <br /> Je m'appelle {author}, développeur web passionné depuis plus de 10 ans. <br />J’aime créer des sites performants, accessibles et pensés pour les utilisateurs. <br />Que ce soit pour un projet sur-mesure, un site WordPress optimisé ou une application web moderne, je mets mon savoir-faire au service de vos idées.</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Accueil;
