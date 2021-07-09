
import {LOGIN} from './Action';

const Authentication=  {
    
    profile : []
   
    
  
   
   
}

const AuthReducer=(state=Authentication,action)=>{
    
    
    if(action.type=== LOGIN)
    {
        return{
         
            ...state,
            profile:action.payload
           
        
        }
    }
 
 
    return state;
 }


export default AuthReducer;