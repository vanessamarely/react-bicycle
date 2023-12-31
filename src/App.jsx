import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Layout from "./components/Layout/Layout";
import HomeLayout from "./components/Layout/HomeLayout";
import Dashboard from "./pages/Dashboard";
import Bicycle from "./pages/Bicycle";
import Rent from "./pages/Rent";
import GeneralInfo from "./pages/GeneralInfo";
import CreateRentBicycle from "./pages/CreateRentBicycle";
import Admin from "./pages/Admin";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route index element={<HomeLayout />} /> */}
        <Route path="/home/*" element={<Dashboard />}>
          <Route path="bicycle" element={<Bicycle />} />
          <Route path="rent" element={<Rent />} />
          <Route path="rent-create" element={<CreateRentBicycle />} />
          <Route index element={<GeneralInfo />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
