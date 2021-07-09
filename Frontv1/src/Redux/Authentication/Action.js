import axios from 'axios';

export const LOGIN = "LOGIN"
export const login = (payload) => {
  
    return {
        type: LOGIN,
        payload
    }
  }


export const Loginn =  (payload) => {
    return   (dispatch) => {
        axios.post('http://localhost:5000/api/users/login',payload)
      
        .then(res=> {
    //   console.log("login data")
        //   console.log(res);
          console.log(res.data.doc);
          if(res.data.status === 201) {
        
          dispatch(login(res.data))
           console.log("Login succsessfull: "+res.data.role)
        //    window.alert("Login succsessfull: "+res.data.message)
          }
          else {
            window.alert(res.data.message)
          }
        })
      
        
        // .then(response=>{
        //     console.log(response);
        //     // set token into local storage in application 
        //     dispatch(loginpatient(response))
        // }) 
        // .catch(function (error) {
        //   console.log(error);
        // });     
        
        };
  };