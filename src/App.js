import './App.css';
import Translation from "./components/Translation"

function App() {
  return (
    <div className="App">
      <Translation />
      <header className="App-header">
        <img src="https://pngimg.com/uploads/robot/robot_PNG88.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Home
        </a>
      </header>
    </div>
  );
}

export default App;
