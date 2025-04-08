import Contact from "./Contact.jsx";

const Footer = ({ author }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="container-fluid bg-dark text-light py-5 px-5 mt-5">
          <div className="row">
            <div className="col-12 justify-content-center text-center">
              <Contact author={author} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 justify-content-center text-center">
              <p>
                {author.authorInfos.tagline} - ©{currentYear} - Tous droits
                r&eacute;serv&eacute;s
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
