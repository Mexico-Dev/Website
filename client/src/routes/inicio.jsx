import NicoleDev from "../assets/nicole-dev.jpg"

export default function Inicio() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-5 text-center">
                    <h1>Aprende, construye, practica y certifícate.</h1>
                </div>
                <div className="col-12 mb-3">
                    <p>
                        Somos una comunidad comprometida a aprender temas de tecnología y
                        programación.
                    </p>
                    <p>
                        Creemos en el software libre y le expansión del conocimiento
                        informático en nuestra comunidades latinas.
                    </p>
                    <p>
                        Sabemos que en la actualidad el conocimiento esta muy disponible y
                        queremos que nuestros miembros tengan acceso a el para mejorar su
                        futuro y vida.
                    </p>
                    <p>
                        Nos interesa enseñar y ser mentores de nuestros miembros con mas
                        inexperiencia en el campo. Entendemos que no todos tenemos las
                        mismas capacidades y oportunidades de vida y por eso tratamos de
                        que todos los miembros de nuestro server aprendan y tenga acceso a
                        la mayor cantidad de recursos.
                    </p>
                </div>
                <div className="col-12 mb-5 text-center">
                    <a href="https://discord.gg/mexicodev" className="btn btn-outline-secondary btn-lg" target="_blank">
                        Unirme ahora <i className="bi bi-box-arrow-up-right" />
                    </a>
                </div>
                <div className="col-12 mb-5 text-center">
                    <img
                        className="img-fluid shadow-lg"
                        src={NicoleDev}
                        alt="Nicole Dev"
                    />
                </div>
            </div>
        </div>
    );
};