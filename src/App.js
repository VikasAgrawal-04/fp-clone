import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import { DashBoard } from "./pages/dashboard/dashboard";
import { Detail } from "./pages/detail/detail_page";
import { StartSelling } from "./pages/startselling/startselling";
import { SignInUp } from "./pages/auth_pages/auth_page";
import AddVehicle from "./pages/addVehicle/AddVehicle";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/signin-up" element={<SignInUp/>} />
        <Route path="/selling" element={<StartSelling />} />
        <Route path="/add-vehicle" element={<AddVehicle />} />
      </Routes>
    </Router>
  );
}

export default App;
