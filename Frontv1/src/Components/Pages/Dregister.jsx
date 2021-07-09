
import {Doctorregister} from '../../Redux/Action/DoctorAction/DoctorLoginAction';
import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Input from '../UI Components/FormControl/Input'
import Submit from '../UI Components/Button/Submit'
import Layout from '../UI Components/Reused/Layout'


const Dregister = () => {
    const dispatch = useDispatch()
    const [dname, setDname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const [gender, setGender] = useState('')
    const [age, setAge] = useState()
    const [education, setEducation] = useState('')
   // const [hospital, setHospital] = useState('')
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')

    // const data = useSelector(state => state.Patient.pdata)
    const dregisterdata = useSelector(state => state.Doctor.Doctor)
    // const dataid = useSelector(state => state.Patient.id)

    // const dataname = useSelector(state => state.Patient.name)

    //     console.log(dataid)
    //     console.log(data)
    // console.log(dataname)
    console.log(dregisterdata)

    const handleNameChange = (event) => {

        setDname(event.target.value)
    }
    const handleEmailChange = (event) => {

        setEmail(event.target.value)
    }
    const handlePhoneChange = (event) => {

        setPhone(event.target.value)
    }

    const handleGenderChange = (event) => {

        setGender(event.target.value)
    }
    const handleAgeChange = (event) => {
        setAge(event.target.value)
    }
    const handleEducationChange = (event) => {

        setEducation(event.target.value)
    }
    const handleLocationChange = (event) => {

        setLocation(event.target.value)
    }

    const handlePasswordChange = (event) => {

        setPassword(event.target.value)
    }
    
    const handleRegister = () => {
      // const role = {
     //       enum: ["doctor"]
      //  };
        const doctor = {
            name: dname,
            email: email,
            password: password,
            phone: phone,
            age: age,
            gender: gender,
            role: "doctor",
            status: "available",
            location: location,
            education: education,
            flag: false,

        };
        dispatch(Doctorregister(doctor))
    }
  


    return (

        <Layout>
            <Input label="Enter Your Name" className="form-control mb-2" value={dname} type="text" onChange={handleNameChange} placeholder="Name"></Input>
            <Input label="Enter Your Email" className="form-control mb-2" type="email" onChange={handleEmailChange} placeholder="Email"></Input>
            <Input label="Enter Your Phone Number" className="form-control mb-2" onChange={handlePhoneChange} text="number" placeholder="Phone Number"></Input>

            <Input label="Enter Your Gender" className="form-control mb-2" onChange={handleGenderChange} type="text" placeholder="Gender"></Input>
            <Input label="Enter Your Age" className="form-control mb-2" onChange={handleAgeChange} placeholder="Age" type="number"></Input>

            <Input label="Education" className="form-control mb-2" placeholder="Education" onChange={handleEducationChange} type="text"></Input>
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

export default Dregister
