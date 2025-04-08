import "../styles/Formations.css";

const Formations = ({ education }) => {
  const alterne = (formation, index) => {
    if (index % 2 === 0) {
      return (
        <>
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">{formation.duration}</span>
                  <span className="year">{formation.year}</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">
                {formation.title} - {formation.institution}
              </h5>
              <p className="description">{formation.description}</p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <span className="month">{formation.duration}</span>
                  <span className="year">{formation.year}</span>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title">
                {formation.title} - {formation.institution}
              </h5>
              <p className="description">{formation.description}</p>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Formations</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main-timeline">
          <div className="timeline">
            {education.map((formation, index) => alterne(formation, index))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Formations;
