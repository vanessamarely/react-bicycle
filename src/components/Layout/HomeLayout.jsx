import { Link, NavLink } from "react-router-dom";
import Logo from "./../../assets/bicycle-logo.svg";
import GeneralInfo from "./../../pages/GeneralInfo";

const HomeLayout = () => {
  return (
    <div className="min-h-full">
      <header className="bg-white border-gray-200 dark:bg-gray-900">
        <nav className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <div className="flex items-center logo md:order-1">
            <Link to="/">
              <img className="h-10 w-auto" src={Logo} alt="Bicycle App" />
            </Link>
          </div>

          <div className="flex items-center md:order-3">
            <NavLink
              to="login"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Login
            </NavLink>
          </div>
        </nav>
      </header>
      <GeneralInfo />
    </div>
  );
};

export default HomeLayout;
