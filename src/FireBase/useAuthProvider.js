import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function useAuthProvider() {
  const info = useContext(AuthContext);
  return info;
}

export default useAuthProvider;
