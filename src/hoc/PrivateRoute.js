import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
  const {currentUser} = useContext(AuthContext)
    //TODO Use this or isAuthenticated HOC
  return (
      <Route
          {...rest}
          render={routeProps =>
              !!currentUser ? (<RouteComponent {...routeProps} />) : (<Redirect to={"/login"} />
              )
          }
      />
  )
}

export default PrivateRoute