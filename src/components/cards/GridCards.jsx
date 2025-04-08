import Card from "./Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridCards({arrProjets}) {
  return (
    <Row xs={1} md={2} lg={3} xl={3} className="g-4">
      {arrProjets.map((projet, idx) => (
        <Col key={idx}>
          <Card projet={projet} />
        </Col>
      ))}
    </Row>
  );
}

export default GridCards;