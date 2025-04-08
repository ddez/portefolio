const APropos = ({ author }) => {
  return (
    <>
      <div id="apropos" className="container-fluid py-5 px-5 my-5">
        <div className="row">
          <div className="col-12">
            <h2>A Propos</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
            <img
              src={author.profileImage}
              alt={author.profileImageAlt}
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-12 col-md-9">
            {author.authorAbout.map((about, index) => (
              <div key={index}>
                <h3>{about.title}</h3>
                <p>{about.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default APropos;
