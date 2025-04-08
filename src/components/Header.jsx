import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div id="accueil"></div>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#accueil">Accueil</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#projets">Projets</Nav.Link>
            <Nav.Link href="#apropos">A Propos</Nav.Link>
            <Nav.Link href="#formations">Formations</Nav.Link>
            <Nav.Link href="#competences">Competences</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
