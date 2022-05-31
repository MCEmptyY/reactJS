import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Stafflist from "./components/Stafflist";
import DetailsStaff from "./components/StaffDetails";
import DepartmentStaff from "./components/Department";
import SalaryComponents from "./components/SalaryComponents";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/staff" element={<Stafflist />}></Route>
        <Route path="/staff/:staffId" element={<DetailsStaff />}></Route>
        <Route path="/Department" element={<DepartmentStaff />}></Route>
        <Route path="/Salary" element={<SalaryComponents />}></Route>
      </Routes>
      <br />
      <Footer />
    </Router>
  );
}

export default App;
