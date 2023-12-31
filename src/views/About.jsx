const AboutUs = () => {
    return (
        <div className="container mt-5">
            <div className="about-section">
                <h1>Nosotros</h1>
                <div className="card mt-4">
                    <div className="card-header">
                        <h4 className="card-title d-flex">Acerca de Cash Wise App</h4>
                    </div>
                    <div className="fs-4 card-body">
                        Somos Cashwise App, donde creemos que el control financiero es la base para una vida más segura y próspera. Nuestra pasión por la gestión inteligente de gastos nos llevó a desarrollar una solución innovadora que pone el control de tus finanzas en tus manos.
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="card-header">
                        <h4 className="card-title d-flex">¿Quienes Somos?</h4>
                    </div>
                    <div className="fs-4 card-body">
                        Somos un equipo de expertos en tecnología y finanzas comprometidos en brindarte las herramientas necesarias para tomar el control de tus gastos de manera efectiva. Con años de experiencia en desarrollo de software y una profunda comprensión de las necesidades financieras de las personas, creamos Cashwise App con un enfoque claro: simplificar la gestión de tus finanzas personales y empresariales.
                    </div>
                </div>
            </div>

            <h2 className="mt-5">Nuestro Equipo</h2>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <img src="https://media.licdn.com/dms/image/C4E03AQGymrqhPE17Ig/profile-displayphoto-shrink_800_800/0/1617919422043?e=2147483647&v=beta&t=HeSyg5P5Icn4s1SSdS5a90n1UpvV1dKq0R7ll0mTk9E" alt="Ramiro" className="card-img-top" />
                        <div className="card-body">
                            <h2 className="card-title">Ramiro Tanquias</h2>
                            <p className="card-subtitle text-muted">CEO & Founder</p>
                            <p className="card-text">Soy el CEO y fundador de Cashwise App. Estoy aquí para ayudarte a tomar el control financiero y alcanzar una vida más segura y próspera.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <img src="https://media.licdn.com/dms/image/D4D03AQHJD8dFEvqUHw/profile-displayphoto-shrink_800_800/0/1698864486317?e=1704326400&v=beta&t=Ng7o8j2h934EQygDxefFRc4OQLQukqCpWxPeV9ef7o0" alt="Tomas" className="card-img-top" />
                        <div className="card-body">
                            <h2 className="card-title">Tomas Fernandez</h2>
                            <p className="card-subtitle text-muted">Art Director</p>
                            <p className="card-text">Como director de arte, me aseguro de que Cashwise App tenga un diseño atractivo y fácil de usar. ¡Estoy aquí para hacer que tu experiencia sea excelente!</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <img src="https://media.licdn.com/dms/image/D4D03AQGQ5q4sphIyPw/profile-displayphoto-shrink_800_800/0/1668626572969?e=1704326400&v=beta&t=-RAuOOJgJfmrv8iZGaRP7_PWgLZ4yim3aZSvdO3PiA4" alt="Mariano" className="card-img-top" />
                        <div className="card-body">
                            <h2 className="card-title">Mariano Macias</h2>
                            <p className="card-subtitle text-muted">Designer</p>
                            <p className="card-text">Como diseñador, mi objetivo es hacer que Cashwise App sea visualmente atractiva y fácil de usar. ¡Estoy aquí para mejorar tu experiencia!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;