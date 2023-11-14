import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { SiGoogle } from "react-icons/si";
import { AuthContext } from "../../FireBase/AuthProvider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginEmPAss, googleSing, user } = useContext(AuthContext);
  const navigat = useNavigate();
  const preveLocation = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    loginEmPAss(email, password)
      .then((user) => {
        console.log("login", user);
        swal("Success", "Login successful!", "success");
        navigat(preveLocation?.state || "/");
        // console.log(user.user);
      })
      .catch((error) => {
        console.log(error.message);
        swal("Error", error.message, "error");
      });
  };

  const handleGoogleSignIn = () => {
    googleSing()
      .then((currentUser) => {
        console.log("google singin", currentUser);
        swal("Success", "Signup successful!", "success");
        navigat(preveLocation?.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center  min-h-screen py-[150px]">
      <div className="p-8 bg-gray-300 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#FF444A]">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 block w-full rounded-md bg-gray-200 text-gray-800 focus:ring focus:ring-[#FF444A] focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-3 block w-full rounded-md bg-gray-200 text-gray-800 focus:ring focus:ring-[#FF444A] focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#FF444A] w-full text-white py-3 px-4 rounded-md hover:bg-[#FF3333] transition duration-300 mt-6"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          <span className="text-sm">or</span>
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="mt-4 w-full bg-[#4285F4] text-white py-3 px-4 rounded-md hover:bg-[#357AE8] transition duration-300 flex items-center justify-center"
        >
          <SiGoogle className="w-6 h-6 mr-2" />
          Sign In with Google
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#FF444A] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
