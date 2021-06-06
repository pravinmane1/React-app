import home from './logo.svg';
import Variables from './Component/Variables';
import Array from './Component/Array';
import './App.css';
import VarCard from './Component/VarCard'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const info = <div>'c: In the above example ,we are using key word <code>var</code> to assign data value can see that variable a is holding the value of five, variable b is holding the value 6 and variable c is holding the addition of the the values ';
                </div>
  return (
    <Router>
      <div className="App">
        <VarCard title='var' info={info}>

          <div class="col">
            <div class="card-body">
              <p><code>var a = 5;</code></p>
              <p><code>var b = 6;</code></p>
              <p><code>var c = a+b;</code></p>
            </div>
          </div>
          <div class="col">
            <div class="card-body">
              <p><code>//output will be 11.</code></p>
            </div>
          </div>

        </VarCard>

        <VarCard title='var' info={info}/>
        <VarCard title='var' info={info}/>

        <div className=" container-fluid row pt-5 ">
          <div className="col">
            <p className=" head float-md-start h1">LEARN JAVASCRIPT AND REACT WITH ME</p>
          </div>
          <div className="col">
            <img className="img-fluid App-logo" src={home} />
          </div>
        </div>
        <div className=" content container">
          <p>Lets start with JAVASCRIPT</p>
          <button type="button" class="btn btn-outline-secondary btn-lg "><Link to="/variables"> Variables</Link></button>
          <button type="button" class="btn btn-outline-secondary btn-lg "><Link to="/array"> Array</Link></button>
          <button type="button" class="btn btn-outline-secondary btn-lg ">Large button</button>
          <button type="button" class="btn btn-outline-secondary btn-lg ">Large button</button>
          <button type="button" class="btn btn-outline-secondary btn-lg ">Large button</button>
        </div>
      </div>
      <Switch>
        <Route path="/variables">
          <Variables />
        </Route>
        <Route path="/array">
          <Array />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

