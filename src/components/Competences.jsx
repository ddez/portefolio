import Badge from "react-bootstrap/Badge";
import Stack from 'react-bootstrap/Stack';

const Comptences = ({ skills }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Compétences</h2>
          </div>
        </div>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-12 col-md-3" key={index}>
              <h3>{skill.name}</h3>
              <Stack direction="horizontal" gap={2}>
                <Badge bg="secondary">{skill.level}</Badge>
                <Badge bg="primary">{skill.category}</Badge>
              </Stack>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comptences;
