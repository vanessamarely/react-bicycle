import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./../../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "./../../store/UserContext.jsx";

import Logo from "./../../assets/bicycle-logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const uid = user.uid;
        console.log("uid", uid);
        setUser({ id: uid, email: user.email });
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
  };
  return (
    <header className="bg-white border-gray-200 dark:bg-gray-900">
      <nav className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <div className="flex items-center logo md:order-1">
          <Link to="/home">
            <img className="h-10 w-auto" src={Logo} alt="Bicycle App" />
          </Link>
        </div>
        <div className="flex items-center md:order-2">
          <div className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <NavLink
              to="rent"
              className="block py-2 pl-3 pr-4 text-indigo-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-indigo-500 md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-indigo-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Rent
            </NavLink>
            <NavLink
              to="bicycle"
              className="block py-2 pl-3 pr-4 text-indigo-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-indigo-500 md:dark:hover:text-indigo-500 dark:hover:bg-gray-700 dark:hover:text-indigo-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Bicycles
            </NavLink>
          </div>
        </div>
        <div className="flex items-center md:order-3">
          <NavLink
            to="profile"
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            {user?.email}
          </NavLink>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={(e) => logoutUser(e)}
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
