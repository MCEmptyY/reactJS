import React from "react";

import { DEPARTMENTS } from "../db/staffs/staffs";

export default function Department() {
  const DepartmentStaff = DEPARTMENTS.map((a) => {
    return (
      <div className=" col-lg-4 col-md-6">
        <div className="card p-2 m-3">
          <div className="card-title h1 px-2">{a.name}</div>
          <div className="card-text text-center">
            Số lượng nhân viên: {a.numberOfStaff}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row">{DepartmentStaff}</div>
    </div>
  );
}
