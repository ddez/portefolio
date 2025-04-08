import "../styles/Projets.css";
import GridCards from "./cards/GridCards";

const Projets = ({ arrProjets }) => {
  return (
    <>
      <div id="projets" className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h2>Projets</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <GridCards arrProjets={arrProjets} />
      </div>
    </>
  );
};

export default Projets;
