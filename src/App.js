import React from "react";
import Stafflist from "./components/Stafflist";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="bg-primary p-3 text-light">Ứng dụng quản lý nhân sự V1.0</h1>
      <Stafflist/>
    </div>
  );
}

export default App;
