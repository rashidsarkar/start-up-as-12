import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { SiGoogle } from "react-icons/si";
import swal from "sweetalert";
import { AuthContext } from "../../FireBase/AuthProvider";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { singupWithEmalPass, googleSing, user, setUser, updateProfiles } =
    useContext(AuthContext);
  const navigat = useNavigate();
  const preveLocation = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const image = form.get("image");

    // Password validation criteria
    if (password.length < 6) {
      swal(
        "Password Error",
        "Password must be at least 6 characters.",
        "error"
      );
    } else if (!/[A-Z]/.test(password)) {
      swal(
        "Password Error",
        "Password must contain at least one capital letter.",
        "error"
      );
    } else if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?~]/.test(password)) {
      swal(
        "Password Error",
        "Password must contain at least one special character.",
        "error"
      );
    } else {
      singupWithEmalPass(email, password)
        .then((currentUser) => {
          updateProfiles(name, image)
            .then(() => {
              swal("Success", "Signup successful!", "success");
              navigat(preveLocation?.state || "/");
              setUser({
                ...user,
                displayName: name,
                photoURL: image,
                email: email,
                uid: currentUser.user.uid,
              });
              console.log(currentUser.user);
              console.log(user);
            })
            .catch(() => {});

          // console.log(user.user);
        })
        .catch((error) => {
          swal("Error", error.message, "error");
          console.log(error.message);
        });
    }
    // event.currentTarget reset();
  };

  const handleGoogleSignUp = () => {
    googleSing()
      .then(() => {
        swal("Success", "Signup successful!", "success");
        navigat("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-[150px] my-4">
      <div className="p-8 bg-gray-300 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center mb-6 text-[#FF444A]">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-3 block w-full rounded-md bg-gray-200 text-gray-800 focus:ring focus:ring-[#FF444A] focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 block w-full rounded-md bg-gray-200 text-gray-800 focus:ring focus:ring-[#FF444A] focus:ring-opacity-50"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Profile Image (Link)
            </label>
            <input
              type="url"
              id="image"
              name="image"
              className="mt-1 p-3 block w-full rounded-md bg-gray-200 text-gray-800 focus:ring focus:ring-[#FF444A] focus:ring-opacity-50"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
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
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          <span className="text-sm">or</span>
        </p>
        <button
          onClick={handleGoogleSignUp}
          className="mt-4 bg-[#4285F4] w-full text-white py-3 px-4 rounded-md hover:bg-[#357AE8] transition duration-300 flex items-center justify-center"
        >
          <SiGoogle className="w-6 h-6 mr-2" />
          Sign Up with Google
        </button>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FF444A] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
