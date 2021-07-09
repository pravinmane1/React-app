import React ,{useState}from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Loginn } from '../../Redux/Authentication/Action'
import Layout from '../UI Components/Reused/Layout'
import Input from '../UI Components/FormControl/Input'
import Submit from '../UI Components/Button/Submit'
import SignUp from './SignUp'
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
const Login = (props) => {

   const dispatch = useDispatch()

    const [password, setPassword] = useState('')

    const [email, setEmail] = useState('')

    const handleEmailChange = (event) =>{
           
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) =>{
           
        setPassword(event.target.value)
    }
   
    const handleLogin = (event) =>{
        const Patient={
            email,
            password
        };
           dispatch(Loginn(Patient))
        setPassword(event.target.value)
       
    }

    // const data = useSelector((state) => state.Patient.pdata)
    // console.log(data)
 
      //   var list = data.map((emp)=>{
      //     return (
      //        <tr key={emp._id}>
      //          <td>{emp.email}</td>
      //        </tr>
      //     )
      // })
     
      
// console.log(data)
   
   
    return (
       <>
          <Layout>
              

          
            <Input label="enter name" className="form-control mb-2" placeholder="Email" type="Email" onChange={handleEmailChange}></Input>

            <Input label="Enter Your Password" className="form-control mb-2" placeholder="Password" type="password" onChange={handlePasswordChange}></Input>
          
            <Submit className="btn mt-4 btn-outline-primary rounded " onClick={handleLogin} type="button" title="Login"></Submit>
    

            <Link className="nav-link" to="/SignUp">
                    <button type="button" className="btn">
                 Sign Up
                    </button>
                  </Link>


              </Layout>  
              {/* <table className=" table table-striped table-hover mb-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Salary</th>
                  <th scope="col">AGE</th>
                  <th scope="col">DELETE</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
               {list}
              </tbody>
            </table> */}
      </>
    )
}

export default Login
