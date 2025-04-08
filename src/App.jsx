import "./styles/App.css";
import siteData from "./data/siteData.json";
import Accueil from "./components/Accueil.jsx";
import Header from "./components/Header.jsx";
import Projets from "./components/Projets.jsx";
import APropos from "./components/APropos.jsx";
import Formations from "./components/Formations.jsx";
import Competences from "./components/Competences.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <Accueil siteData={siteData} />
        <Projets arrProjets={siteData.arrProjets} />
        <APropos author={siteData.author} />
        <Formations education={siteData.education} />
        <hr />
        <Competences skills={siteData.skills} />
        <Footer author={siteData.author} />
      </div>
    </>
  );
}

export default App;
