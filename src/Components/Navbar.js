import logo from '../logo.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="App-logo" />
            <h1>Dawid Urbaniak</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create">Nowy blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;