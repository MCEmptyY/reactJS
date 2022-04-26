import React from "react";
import { Link } from "react-router-dom";

import DetailsStaff from "./StaffDetails";
import { STAFFS } from "./staffs/staffs";

export default function Stafflist() {
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
              <h3 className="card-text text-center ">{staff.name}</h3>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <div className="row">{renderStafflist}</div>
      </div>
    </>
  );
}
