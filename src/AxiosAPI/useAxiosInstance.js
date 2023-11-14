import axios from "axios";
import { useEffect } from "react"; // Import useEffect from React
import { useNavigate } from "react-router-dom"; // Import useNavigate from the appropriate package
import useAuthProvider from "../FireBase/useAuthProvider";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Your API base URL
  // baseURL: "http://localhost:5000", //> Your API base URL
  withCredentials: true,
});

function useAxiosInstance() {
  const navigate = useNavigate();
  const { logOut } = useAuthProvider();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log("error track ", err.response);
        if (err.response.status === 401 || err.response.status === 403) {
          console.log("Log Out The User");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [logOut, navigate]);

  return axiosInstance; // Return the configured axiosInstance
}

export default useAxiosInstance; // Export the function
