import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Placeholder from "../../assets/placeholder.png";

function BasicCard({ projet }) {
  return (
    <Card>
      <Card.Img variant="top" src={
                  projet.featuredImage && projet.featuredImage.trim() !== ""
                    ? projet.featuredImage
                    : Placeholder
                } />
      <Card.Body>
        <Card.Title>{projet.title}</Card.Title>
        <Card.Text>
          {projet.description}
        </Card.Text>
        <Stack gap={2}>
            {projet.technologies.map((technologie) => (            
                <Badge bg="dark">{technologie}</Badge>
            ))}
        </Stack>
        <br />
        <div className="d-grid gap-2">
            <Button variant="secondary" size="sm" href={projet.demoLink} target="_blank">
                Voir le projet
            </Button>
            <Button variant="secondary" size="sm" href={projet.codeLink} target="_blank">
                Voir le code
            </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;