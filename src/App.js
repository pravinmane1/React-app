import logo from './logo.svg';
import './App.css';
import { Button,Form } from 'react-bootstrap';
import Hello from './Hello'
import Validation from './Validation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello ></Hello> */}
        <Validation></Validation>
      </header>
    </div>
  );
}

export default App;
