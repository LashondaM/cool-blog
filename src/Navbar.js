// type sfc and hit tab to make a stateless functional component
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Cool Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;