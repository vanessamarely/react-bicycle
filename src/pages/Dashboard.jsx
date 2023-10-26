import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./../store/UserContext.jsx";
import { useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header></Header>
      <div className="mb-[100px]">
        <Outlet />
      </div>
      <Footer></Footer>
    </UserContext.Provider>
  );
};

export default Dashboard;
