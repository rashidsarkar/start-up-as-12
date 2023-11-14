import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../FireBase/AuthProvider";
import CustomLoading from "../Components/CustomLoading";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-24 mx-auto loadd">
        <CustomLoading></CustomLoading>
      </div>
    );
  }
  if (user) return children;
  return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
}

export default PrivateRoute;
