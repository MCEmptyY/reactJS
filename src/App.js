import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import StaffList from "./pages/StaffList";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailsStaff from "./pages/StaffDetails";
import DepartmentStaff from "./pages/Department";
import Salary from "./pages/Salary";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/staff" element={<StaffList />}></Route>
        <Route path="/staff/:staffId" element={<DetailsStaff />}></Route>
        <Route path="/Department" element={<DepartmentStaff />}></Route>
        <Route path="/Salary" element={<Salary />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
