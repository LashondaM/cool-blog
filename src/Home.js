// state: the data being used in a component
// hook: a special type of function that does a certain job, and starts with the word: use
import { useState } from "react";

const Home = () => {
    // let name = 'luigi';
    const [name, setName] = useState('luigi'); // name is the initial value: luigi, and setName is the function we can use to change the name value (video #8 time- 3:50)
    const [age, setAge] = useState(25);
    
    const handleClick = () => {
        setName('mario');
        setAge(19);
    }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;