import Navbar from './Navbar';
import Home from './Home';

function App() {
  let name = 'Aya N S'
  let link = 'http://www.google.com';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
