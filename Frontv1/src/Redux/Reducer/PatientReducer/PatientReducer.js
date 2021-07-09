//import { ADMIN ,ADMIN_VIE} from "../../Action/AdminAction/AdminAction";
import {PATIENT_CREATE, PATIENT_LOGIN,patient_VIEW} from "../../Action/PatientAction/PatientLoginAction"

const Patientlogin=  {
    
    Patient:[],
    pdata:[{id:null}],
    id:null,
    name:null,
    age: 11,
disease: null,

email:null, 
gender: null,
location: null,


phone:null,
role: null,
    PATIENTALL:[]    
   
}

const PatientReducer=(state=Patientlogin,action)=>{
    if(action.type===PATIENT_CREATE){
        return{
            ...state,
         
            Patient:action.payload
           
        }
    }
    if(action.type===PATIENT_LOGIN)
    {
        return{
         
            ...state,
            id:action.payload._id,
            
            name:action.payload.name,
            age: action.payload.age,
        disease: action.payload.disease,
        
        email:action.payload.email, 
        gender: action.payload.gender,
        location: action.payload.location,
        
        
        phone:action.payload.phone,
        role:action.payload.role,
        
           
        
        }
    }
    if(action.type===patient_VIEW){
                return{...state,
                  
                    PATIENTALL:action.payload
                }
            }
         
 
 
    return state;
 }


export default PatientReducer;