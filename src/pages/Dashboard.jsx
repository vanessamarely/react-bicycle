import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <div className="mb-[100px]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
