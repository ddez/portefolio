const Contact = ({ author }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>{author.authorContact.email}</p>
            <p>{author.authorContact.phone}</p>
            <p>{author.authorContact.location}</p>
          </div>
          <div
            className="col-6"
            style={{ textAlign: "right", fontSize: "2em" }}
          >
            <p>{author.authorInfos.availability}</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
