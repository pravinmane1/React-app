
import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Registers } from '../../Redux/Action/PatientAction/PatientLoginAction'
import Input from '../UI Components/FormControl/Input'
import Submit from '../UI Components/Button/Submit'
import Layout from '../UI Components/Reused/Layout'
const Register = () => {
    const dispatch= useDispatch()
    const [pname, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const [gender, setGender] = useState('')
    const [age, setAge] = useState()
    const [disease, setDisease] = useState('')
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')
    
    // const data = useSelector(state => state.Patient.pdata)
    const registerdata = useSelector(state => state.Patient.Patient)
    // const dataid = useSelector(state => state.Patient.id)
  
    // const dataname = useSelector(state => state.Patient.name)
   
//     console.log(dataid)
//     console.log(data)
// console.log(dataname)
console.log(registerdata)

    const handleNameChange = (event) =>{
    
        setName(event.target.value)
        }
        const handleEmailChange = (event) =>{
           
            setEmail(event.target.value)
        }
        const handlePhoneChange = (event) =>{
           
            setPhone(event.target.value)
        }

        const handleGenderChange = (event) =>{
           
            setGender(event.target.value)
        }
        const handleAgeChange = (event) =>{
                     setAge(event.target.value)
        }
        const handleDiseaseChange = (event) =>{
           
            setDisease(event.target.value)
        }
        const handleLocationChange = (event) =>{
           
            setLocation(event.target.value)
        }
        
        const handlePasswordChange = (event) =>{
           
            setPassword(event.target.value)
        }
       const  handleRegister=() =>{
        const patient = {
            name:pname,
    email:email,
    password:password,
    phone:phone,
    age:age,
    gender:gender,
    role:"patient",
    location:location,
    disease,
    flag: true,
    
    
          };
        dispatch(Registers(patient))
       }
    //    if(data){
    //     var list = data.map((emp,i)=>{
    //       return (
    //          <tr key={i}>
            
    //            <td>{emp.email}</td>
               
    //          </tr>
    //       )
    //   })
    //    }

    

    return (
        
      <Layout>
    <Input label="Enter Your Name" className="form-control mb-2" value={pname} type="text" onChange={handleNameChange} placeholder="Name"></Input>
    <Input label="Enter Your Email" className="form-control mb-2" type="email" onChange={handleEmailChange} placeholder="Email"></Input>
    <Input label="Enter Your Phone Number" className="form-control mb-2" onChange={handlePhoneChange} text="number" placeholder="Phone Number"></Input>
      
    <Input label="Enter Your Gender" className="form-control mb-2" onChange={ handleGenderChange} type="text" placeholder="Gender"></Input>
    <Input label="Enter Your Age" className="form-control mb-2" onChange={handleAgeChange} placeholder="Age" type="number"></Input>
      
    <Input label="Disease" className="form-control mb-2"  placeholder="Disease" onChange={handleDiseaseChange} type="text"></Input>
    <Input label="Enter Your Location" className="form-control mb-2" placeholder="Location" type="text" onChange={handleLocationChange}></Input>
    
    <Input label="Enter Your Password" className="form-control mb-2" placeholder="Password" type="password" onChange={handlePasswordChange}></Input>

    <Submit className="btn mt-4 btn-outline-primary rounded " onClick={handleRegister} type="button" title="Submit"></Submit>
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
            </table>
     */}
    </Layout>
        
    )
}




//     return (
//         <div>
            
//             <h1>hellow patient</h1>
//         </div>
//     )
// }

export default Register
