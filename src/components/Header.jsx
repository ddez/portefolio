import { Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="accueil">
        <Nav.Item>
          <Nav.Link eventKey="accueil" href="#home">Accueil</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#projets">Projets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#apropos">A propos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#formations">Formations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#competences">Competences</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;
