import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthProvider from "../FireBase/useAuthProvider";

const axiosInstance = axios.create({
  baseURL: "https://educoda-server.vercel.app",
  withCredentials: true,
});

function useAxiosInstance() {
  const navigate = useNavigate();
  const { logOut } = useAuthProvider();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (res) => res,
      (err) => {
        console.error("Error:", err.response);

        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          console.log("Logging out the user");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.error("Logout error:", error));
        }

        return Promise.reject(err);
      }
    );

    // Clean up the interceptor when the component unmounts
    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [logOut, navigate]);

  return axiosInstance;
}

export default useAxiosInstance;
