import './App.css';

function App() {
const title = 'Welcome to the new blog';
const likes = 50;
// const person = {name: 'shonnie', age: 22}; can do bools and objects and try to output it like that

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ "hello yall" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        
      </div>
    </div>
  );
}

export default App;
