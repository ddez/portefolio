const Comptences = ({ skills }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Comptences</h2>
          </div>
        </div>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-12" key={index}>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
              <p>{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comptences;
