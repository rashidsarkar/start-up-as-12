import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

import Login from "../Pages/Account/Login";
import SignUp from "../Pages/Account/SignUp";

import NotFound from "../Pages/NotFound ";
import Home from "../Pages/Home/Home";
import About from "../Components/About";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>,
          </PrivateRoute>
        ),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
