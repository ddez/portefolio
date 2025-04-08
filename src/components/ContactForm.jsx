import { Button, Form, FloatingLabel } from "react-bootstrap";

const ContactForm = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <FloatingLabel
              controlId="floatingInput"
              label="Votre adresse email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="nom@exemple.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Votre message">
              <Form.Control
                as="textarea"
                placeholder="Laisez votre message ici"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <div className="d-grid gap-2">
              <Button
                type="submit"
                className="my-3"
                size="lg"
                variant="outline-light"
              >
                Envoyer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
