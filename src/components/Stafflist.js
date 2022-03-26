import React, { useState } from "react";
import { STAFFS, DEPARTMENTS } from "./staffs/staffs";

export default function Stafflist() {
  const [staffSelected, setStaffSelected] = useState("");

  const onClickHandle = (staff) => {
    setStaffSelected(staff);
  };

  const renderStafflist = STAFFS.map((data) => {
    return (
      <div key={data.id} className="col-3 mt-3">
        <div  className="card text-white bg-dark">
          <div className="card-body" onClick={() => onClickHandle(data)}>
            <h3 className="card-text text-center">{data.name}</h3>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container">
        <div className="row">{renderStafflist}</div>
        <hr />
        {staffSelected !== '' &&
          <>
            <h1>STT: {staffSelected.id}</h1>
            <h1> Bộ phận đang làm việc: {staffSelected.department.name}</h1>
            <h1> Ngày sinh: { new Date(staffSelected.doB).toLocaleDateString() }</h1>
            <h1> Ngày vào công ty: {new Date(staffSelected.startDate).toLocaleDateString()}</h1>
            <h1> Số ngày nghỉ còn lại: {staffSelected.annualLeave}</h1>
            <h1> Số ngày đã làm thêm: {staffSelected.overTime}</h1>
          </>
        }
      </div>
    </>
  );
}
