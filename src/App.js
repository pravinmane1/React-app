import logo from './logo.svg';
import './App.css';
import { Button,Form } from 'react-bootstrap';
import Hello from './Hello'
import Validation from './Validation';
import CustomInput from './components/CustomInput';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CustomInput type="checkbox" label="this is label" > {/**checkbox radio dropDown password text textArea */}
      <option>Hi </option>
      <option>Hello </option>

      </CustomInput>
      </header>

    </div>
  );
}

export default App;
