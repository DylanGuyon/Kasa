import { Link, useLocation } from "react-router-dom";
import './Nav.scss';

export default function Nav() {
    const location = useLocation(); 


    const isActive = (path) => {
        return location.pathname === path;
    }

    return (
        <nav className="nav-header">
            <Link to="/" className={`nav-header_link-home ${isActive('/') ? 'active' : ''}`}>
                Accueil
            </Link>
            <Link to="/about" className={`nav-header_link-about ${isActive('/about') ? 'active' : ''}`}>
                À Propos
            </Link>
        </nav>
    );
}