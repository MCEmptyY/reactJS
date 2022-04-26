import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Stafflist from "./components/Stafflist";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailsStaff from "./components/StaffDetails";
import DepartmentStaff from "./components/Department";
import SalaryComponents from "./components/SalaryComponents";

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
    </Router>
  );
}

export default App;
