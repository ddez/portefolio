import "./styles/App.css";
import siteData from "./data/siteData.json";
import Accueil from "./components/Accueil.jsx";
import Header from "./components/Header.jsx";
import Projets from "./components/Projets.jsx";
import APropos from "./components/APropos.jsx";
import Formations from "./components/Formations.jsx";
import Competences from "./components/Competences.jsx";
import Contact from "./components/Contact.jsx";
// import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <Accueil siteData={siteData} />
        <Projets arrProjets={siteData.arrProjets} />
        <hr />
        <APropos authorAbout={siteData.author.authorAbout} />
        <hr />
        <Formations education={siteData.education} />
        <hr />
        <Competences skills={siteData.skills} />
        <hr />
        <Contact author={siteData.author} />
        <hr />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
