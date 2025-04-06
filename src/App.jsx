import Accueil from "./components/Accueil.jsx";
import Header from "./components/Header.jsx";
import Projets from "./components/Projets.jsx";
import APropos from "./components/APropos.jsx";
import Formations from "./components/Formations.jsx";
import Competences from "./components/Competences.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <Accueil />
        <hr />
        <Projets />
        <hr />
        <APropos />
        <hr />
        <Formations />
        <hr />
        <Competences />
        <hr />
        <Contact />
      </div>
    </>
  );
}

export default App;
