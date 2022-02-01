import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar /> {/*you can also do <Navbar></Navbar> */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
