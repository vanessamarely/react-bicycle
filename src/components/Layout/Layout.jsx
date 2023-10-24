import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-full">
      <Outlet />
    </div>
  );
};

export default Layout;
