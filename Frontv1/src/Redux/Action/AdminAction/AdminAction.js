import axios from 'axios';
export const ADMIN = "ADMIN"
export const ADMIN_VIEW = "ADMIN_VIEW"





 export const print = (payload) => {
  
    return {
        type: ADMIN,
        payload
    }
}



export const viewAdmin = (payload) => {
  
  return {
      type: ADMIN_VIEW,
      payload
  }
}


export const getAdmin = ()=>{
  return  (dispatch) => {
   axios.get('http://localhost:5000/api/users')
  .then(function (response) {
    console.log(response.data);
    dispatch(viewAdmin(response.data))
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
  };
} 

export const dummy =  (user) => {
    return   (dispatch) => {
        axios.post('http://localhost:5000/api/admin',user)
          .then(function (res) {
            console.log(res);
            
            dispatch(print(res));
          })
          .catch(function (error) {
            console.log(error);
          });
    };
  };

  export const edit =  (user,id) => {
    return   (dispatch) => {
        axios.patch('http://localhost:5000/api/admin/'+id,user)
          .then(function (res) {
            console.log(res);
            
            dispatch(print(res));
          })
          .catch(function (error) {
            console.log(error);
          });
    };
  };

  export const deleteid =  (id) => {
    return   (dispatch) => {
        axios.delete('http://localhost:5000/api/admin/'+ id)
          .then(function (res) {
            console.log(res);
            
          })
          .catch(function (error) {
            console.log(error);
          });
    };
  };