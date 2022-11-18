//import logo from './logo.svg';
//import './App.css';
import Checklist from "./checklist";
import Inputtext from "./Input";
import Buttontodo from "./button";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My todo app
        </h1>
      <Inputtext />
        <Buttontodo />
        <h2>Todos</h2>
        
      </header>
      <Checklist />
    </div>
  );
}

export default App;
