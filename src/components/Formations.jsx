const education = [
    {
      title: "Formation Développeur Web et Web Mobile",
      institution: "OpenClassrooms",
      year: "2020",
      description: "Formation diplômante axée sur la création d’applications web responsives, l’intégration, le développement back-end et les bases de la gestion de projet."
    },
    {
      title: "Certificat JavaScript Avancé",
      institution: "Udemy",
      year: "2019",
      description: "Approfondissement des concepts modernes de JavaScript (ES6+), programmation fonctionnelle et asynchrone."
    },
    {
      title: "Licence Professionnelle Communication Visuelle et Multimédia",
      institution: "Université de Lyon 2",
      year: "2013",
      description: "Approche complète du design graphique, de l’ergonomie web et de la création de contenus numériques."
    },
    {
      title: "Baccalauréat Littéraire",
      institution: "Lycée Victor Hugo – Besançon",
      year: "2008",
      description: "Option arts plastiques, spécialité audiovisuel."
    },
    {
      title: "Certificat Git & GitHub",
      institution: "Codecademy",
      year: "2021",
      description: "Maîtrise des workflows Git, collaboration, gestion des branches et bonnes pratiques de versioning."
    }
  ];
  
const Formations = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Formations</h2>
                    </div>
                </div>
                <div className="row">
                    {education.map((formation, index) => (
                        <div className="col-12" key={index}>
                            <h3>{formation.title}</h3>
                            <p>{formation.institution}</p>
                            <p>{formation.year}</p>
                            <p>{formation.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Formations;