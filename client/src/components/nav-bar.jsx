import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg mb-5">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="MexicoDev" height="32" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="bi bi-list" />
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavAltMarkup"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <i className="bi bi-house-fill" /> Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cursos">
                                <i className="bi bi-bookmark-fill" /> Cursos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/videos">
                                <i className="bi bi-play-circle-fill" /> Videos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/eventos">
                                <i className="bi bi-calendar-event-fill" /> Eventos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/empleos">
                                <i className="bi bi-briefcase-fill" /> Empleos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tienda">
                                <i className="bi bi-bag-fill" /> Tienda
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
