import "../styles/Projets.css";
import GridCards from "./cards/GridCards";


const Projets = ({ arrProjets }) => {
  return (
    <>
      <div className="container">
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
