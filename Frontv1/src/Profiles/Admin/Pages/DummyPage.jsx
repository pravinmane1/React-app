
import { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {dummy,getAdmin,deleteid,edit} from '../../../Redux/Action/AdminAction/AdminAction'





function DummyPage(){

    const dispatch = useDispatch();
   
    const data= useSelector(state=>state.Admin.users);

    //console.log(data);
  
     const[email,setEmail]=useState("");
     const[name,setName]=useState("");

     const[emailEdit,setEmailEdit]=useState();
     const[nameEdit,setNameEdit]=useState();
    
     
     const handleEmial = (event) => {
       setEmail(event.target.value);
     };
     const handlePasswaord = (event) => {
       setName(event.target.value);
     };
  
      const loginhandler = () => {
       const user = {
         email,
         name
       };
  
         dispatch(dummy(user))
        
        }
      
           const handlegetUser=()=>{
            dispatch(getAdmin())
              
            }
            

            const deletehandler=(e)=>{
              dispatch(deleteid(e.target.value))
            }

            

            const emailChange=(event)=>{
              setEmailEdit(event.target.value);
            }

           const nameChange=(event)=>{
              setNameEdit(event.target.value);
           }
           

            const edithandler=(e)=>{
              
              
              const id=e.target.value;
              
              const user = {
                email:emailEdit,
                name:nameEdit
              };
             
              
              dispatch(edit(user,id))

            }
      
           if (data) {
             var List = data.map((user) => {
               return (
                 <tr key={user._id}>
                   <td>{user._id}</td>
                   <td>
                     <form>
                       <input
                         type="text"
                         onChange={emailChange}
                         defaultValue={user.email}
                         
                       />
                     </form>
                   </td>

                   <td>
                     <input
                       type="text"
                       onChange={nameChange}
                       defaultValue={user.name}
                     />
                   </td>

                   <td>
                     <button value={user._id} onClick={deletehandler}>
                       Delete
                     </button>
                   </td>
                   <td>
                     <button value={user._id} onClick={edithandler}>
                       Edit
                     </button>
                   </td>
                 </tr>
               );
             });
           }
          
    
  

    return(
        <>
            <h1>I am Dummy Page</h1>
            <input lable='Email' className="form-control mb-3" onChange={handleEmial} value={email} type='text' placeholder='James123@gmail.com' ></input>
        <input lable='password'className="form-control mb-3" onChange={handlePasswaord} value={name} type='password' placeholder='password'></input>
        <button onClick={loginhandler} className="btn btn-primary mt-3 mb-3" >Submit</button>
       
        <div className="d-flex justify-content-center mt-5">
          <button
            onClick={handlegetUser}
            className="btn btn-primary "
          >
            Get Users
          </button>
        </div> 


        <table className="table table-striped m-5" striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>name</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{List}</tbody>
        </table>

        </>
    )
}

export default DummyPage;