import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="mb-4 text-6xl font-extrabold">404</h1>
      <p className="mb-8 text-2xl">Page not found</p>
      <Link
        to="/"
        className="px-4 py-2 text-lg text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-105"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
