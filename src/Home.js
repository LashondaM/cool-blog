const Home = () => {
    
    const handleClick = (e) => {
        console.log('hello yall', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('luigi', e)}>Click me again</button> {/* anonymous function */}
        </div>
     );
}
 
export default Home;