import logo from '../logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="App-logo" />
            <h1>Dawid Urbaniak</h1>
            <div className="links">
                <a href="/">home</a>
                <a href="/create" style={{
                    borderRadius: "8px",
                    color: "white",
                    backgroundColor: "#e2b714"
                }}>Nowy blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;