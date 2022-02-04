// type sfc and hit tab to make a stateless functional component
const Navbar = () => {

    function handleMouseOver(e) {
        e.target.style.background = '#d3154e';
    }

    function handleMouseOff(e) {
        e.target.style.background = '#f1356d';
    }

    return ( 
        <nav className="navbar">
            <h1>The Cool Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" onMouseOver={handleMouseOver} onMouseLeave={handleMouseOff} style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    transition: '0.3s'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;