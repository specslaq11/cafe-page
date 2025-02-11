import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="nav">
            <div className="nav-logo">
                <img onClick={() => navigate('/')} className="nav-logo-img" src={logo} alt="logo" />
            </div>
            <ul className="nav-list">
                <li><a className="nav-item" onClick={() => navigate('/')}>Home</a></li>
                <li><a className="nav-item" onClick={() => navigate('/About')}>About</a></li>
                <li><a className="nav-item" onClick={() => navigate('/Menu')}>Menu</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;