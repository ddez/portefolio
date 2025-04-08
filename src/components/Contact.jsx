import Badge from "react-bootstrap/Badge";
import ContactForm from "./ContactForm";
import ContactInfos from "./ContactInfos";

const Contact = ({ author }) => {
  return (
    <>
      <div id="contact" className="container">
        <div className="row">
          <div className="col-12">
            <h2>
              Contact
              <br />
              <Badge bg="secondary">{author.authorInfos.availability}</Badge>
            </h2>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6">
            <ContactInfos authorContact={author.authorContact} />
          </div>
          <div className="col-12 col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
