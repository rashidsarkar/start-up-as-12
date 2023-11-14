import { Link, NavLink } from "react-router-dom";
import useAuthProvider from "../FireBase/useAuthProvider";
import { Tooltip as ReactTooltip } from "react-tooltip";

function NavBar() {
  // Replace with your actual authentication logic

  const { user, logOut } = useAuthProvider();

  const handleSingOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#87af58] font-semibold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#87af58] font-semibold"
              : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li></li>
    </>
  );
  // console.log(user?.photoURL);
  return (
    <div className="left-0 right-0 z-50 w-full mx-auto text-white rounded-b-none bg-slate-800 max-w-7xl h-28 navbar">
      <div className="w-full lg:w-[50%] navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-700 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-xl normal-case btn btn-ghost">
          {/* <img
            src="https://i.ibb.co/rQd3sFn/download.png"
            className="h-full"
            alt=""
          /> */}
          LOGO IMG
        </a>
      </div>
      <div className="hidden navbar-center lg:flex lg:ml-[100px]">
        <ul className="inline-flex flex-row flex-wrap p-2 px-1 space-x-4 text-xl font-semibold menuu menuu-horizontal">
          {navLinks}
        </ul>
      </div>

      <div className="justify-end navbar-end">
        {user ? (
          // User is authenticated, show user menu
          <div className="dropdown dropdown-end">
            {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div data-tooltip-id="my-tooltip-1" className="w-10 rounded-full">
                <div className="text-white">
                  <img src={user.photoURL || "photoURL"} />
                </div>
              </div>
            </label> */}
            {/* <ReactTooltip
              id="my-tooltip-1"
              place="bottom"
              content={user.displayName}
            /> */}
            {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL || "photoURL"} />
              </div>
            </label> */}
            <div
              className="cursor-pointer tooltip tooltip-left"
              data-tip={user.displayName}
            >
              <div tabIndex={0} className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL || "photoURL"} />
                </div>
              </div>
            </div>

            <ul
              tabIndex={0}
              className="mt-3 w-[250px] z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box "
            >
              <li>
                <div className="flex flex-col px-4 py-3 ">
                  <span className="block text-sm text-[#503CA1] dark:text-white">
                    {user.displayName || "Display Name"}
                  </span>
                  <span className="block text-sm text-[#503CA1] truncate dark:text-gray-400">
                    {user.email || "Email"}
                  </span>
                </div>
              </li>

              <li className="mx-auto text-center text-[#503CA1]">
                <Link onClick={handleSingOut}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          // User is not authenticated, show login button
          <ul className="inline-flex flex-row flex-wrap gap-3 p-2 px-1 text-xl text-white menuu menuu-horizontal">
            <li>
              <NavLink
                to="/Login"
                className="inline-block rounded bg-[#6440FA] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#4f3c9e] hover:shadow-lg focus:bg-[#4f3c9e]focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#4f3c9e] active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-md"
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
