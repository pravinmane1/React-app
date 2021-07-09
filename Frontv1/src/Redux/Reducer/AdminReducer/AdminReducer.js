import { ADMIN ,ADMIN_VIEW} from "../../Action/AdminAction/AdminAction";

const Admin=  {
    
    users:null,
    email:null,
    name:null
   
}

const AdminReducer=(state=Admin,action)=>{
    if(action.type===ADMIN){
        return{...state,
            email:action.email,
            name:action.name
        }
    }
    if(action.type===ADMIN_VIEW){
        return{...state,
            users:action.payload
        }
    }
 
    return state;
 }


export default AdminReducer;