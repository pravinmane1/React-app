import React from 'react'

import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import Register from './Register';
import Dregister from './Dregister';
const SignUp = () => {
  

    return (
     <>
     <h1>
         I WANT TO SIGN UP AS
     </h1>
     <Router>

<div className="p-3">     <Link to='/Dregister'>AS A DOCTOR</Link></div> 
   
   <Link to='/Register'>AS A PATIENT</Link> 

      <Switch>

<Route path="/Dregister">
<Dregister></Dregister>
</Route>

<Route path="/Register">
<Register></Register>
</Route>



</Switch>

</Router>
{/* 
    <Link to='/Dregister'>AS A DOCTOR</Link> 
   
    <Link to='/Register'>AS A PATIENT</Link>  */}
     </>
    )
}

export default SignUp
