import { useSelector } from 'react-redux';
import { Redirect,Route } from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {

  var admin = false

  var role = useSelector(state => state.Auth.profile.role)
  console.log (role)
 

 if (role === "admin") {admin = true}

  return (
    <Route
      {...rest}
      render={() =>
        admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
            }}
          />
        )
      }
    />
  );
};

    export default AdminRoute;
