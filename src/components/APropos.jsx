
const APropos = ({authorAbout}) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>A Propos</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {
                            authorAbout.map((about, index) => (
                                <div key={index}>
                                    <h3>{about.title}</h3>
                                    <p>{about.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
             </div>
        </>
    );
};

export default APropos;