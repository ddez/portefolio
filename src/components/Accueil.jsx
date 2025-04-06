import "../styles/Accueil.css"; 
import Banner from "./Banner";

const Accueil = () => {
  return (
    <>
      <div>
        <h1 className="dd-title">Portefolio</h1>
        <h2>Denis Désautard - Développeur web</h2>
        <p>👋 Bienvenue ! <br /> Je m'appelle [Prénom Nom], développeur web passionné depuis plus de 10 ans. <br />J’aime créer des sites performants, accessibles et pensés pour les utilisateurs. <br />Que ce soit pour un projet sur-mesure, un site WordPress optimisé ou une application web moderne, je mets mon savoir-faire au service de vos idées.</p>
        {/*<Banner />*/}
      </div>
    </>
  );
};

export default Accueil;
