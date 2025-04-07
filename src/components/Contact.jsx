const contactInfo = {
    email: "contact@developpeurweb.dev",
    phone: "+33 6 12 34 56 78",
    location: "Lyon, France",
    availability: "Disponible pour de nouveaux projets!"
  };
  
const Contact = () => {
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
                        <p>{contactInfo.email}</p>
                        <p>{contactInfo.phone}</p>
                        <p>{contactInfo.location}</p>
                    </div>
                    <div className="col-6" style={{textAlign: "right", fontSize: "2em"}}>
                        <p>{contactInfo.availability}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;