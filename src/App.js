import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { STAFFS } from "./components/staffs/staffs";

import Header from "./components/Header";  
import Stafflist from "./components/Stafflist";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Stafflist/>
        <Routes>
          <Route exact path="/staff" element={ < DetailsStaff />}></Route>
        </Routes>
      </div>
    </Router>
      
      
      

    
  );
}

export default App;
