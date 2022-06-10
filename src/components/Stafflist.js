import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { STAFFS } from "./staffs/staffs";
import { Button } from "reactstrap";

import AddStaff from "./addStaff";

export default function Stafflist() {
  const [input, setInput] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);

  const handlesubmit = (event) => {
    event.preventDefault();
  };

  const renderStafflist = STAFFS.filter((val) => {
    return val.name.toLowerCase().includes(input.toLowerCase());
  }).map((staff) => {
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
        <div className="row">
          <div className="col-6 mt-2 text-center"></div>
          <div className="col-6">
            <div className="text-center">
              <label className="h3 fw-bold">Tìm nhân viên: </label>
              <input
                type="text"
                value={input}
                className="col-form-label m-2"
                onChange={(e) => setInput(e.target.value)} // update giá trị của state --> giá trị ở đây là value={input}
                placeholder="Search here ..."
              />
            </div>
            <div className="text-center">
              <Button color="danger" onClick={() => setOpenModal(!openModal)}>
                +
              </Button>
              <AddStaff isOpen={openModal} toggle={toggle} />
            </div>
          </div>
        </div>
      </form>
      <div className="container">
        <div className="row">{renderStafflist}</div>
      </div>
    </>
  );
}
