import logo from './logodevmind.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome! This is my first React app!
        </p>
        <a
          className="App-link"
          href="https://www.devmind.ro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devmind link
        </a>
      </header>
    </div>
  );
}

export default App;
