//import { ADMIN ,ADMIN_VIE} from "../../Action/AdminAction/AdminAction";
import {DOCTOR_CREATE} from "../../Action/DoctorAction/DoctorLoginAction";

const Doctorlogin=  {
    
    Doctor:[],
     
   
}

const DoctorReducer=(state=Doctorlogin,action)=>{
    if(action.type===DOCTOR_CREATE){
        return{
            ...state,
         
           Doctor:action.payload
           
        }
    }
  
   
    return state;
 }


export default DoctorReducer;