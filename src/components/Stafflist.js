import React, { useState } from "react";
import { Link } from "react-router-dom";

import { STAFFS } from "./staffs/staffs";

export default function Stafflist() {
  const [input, setInput] = useState("");
  const handlesubmit = (event) => {
    event.preventDefault();
  };
  console.log(input);
  const renderStafflist = STAFFS.map((staff) => {
    return (
      <div key={staff.id} className="col-2 mt-3">
        <Link to={`/staff/${staff.id}`}>
          <div className="card">
            <div className="card-body bg-warning">
              <img
                src={require("./staffs/staff.png")}
                className="text-center w-100"
                alt="..."
              />
              <h3 className="card-text text-center">{staff.name}</h3>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="text-center">
          <input
            type="text"
            value={input}
            class="col-form-label m-2"
            onChange={(e) => setInput(e.target.value)} // update giá trị của state --> giá trị ở đây là value={input}
          />
          {/* <input type="submit" value="Submit" className="btn btn-primary" /> */}
          {STAFFS.filter((val) => {
            return val.name.toLowerCase().includes(input.toLowerCase());
          }).map((val, key) => {
            return (
              <div key={val.key}>
                <p>{val.name}</p>
              </div>
            );
          })}
        </div>
      </form>

      <div className="container">
        <div className="row">{renderStafflist}</div>
      </div>
    </>
  );
}
