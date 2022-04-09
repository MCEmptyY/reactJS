import React, { useState } from "react";
import { Link } from "react-router-dom";

import DetailsStaff from "./StaffDetails";
import { STAFFS, DEPARTMENTS } from "./staffs/staffs";


export default function Stafflist() {


  const [staffSelected, setStaffSelected] = useState("");

  const onClickHandle = (staff) => {
    setStaffSelected(staff);
  };

  

  const renderStafflist = STAFFS.map((data) => {
    return (
      <div key={data.id} className="col-2 mt-3">
          <div  className="card" >
            <div className="card-body bg-warning" onClick={() => onClickHandle(data)}>
              <img src={require('./staffs/staff.png')} className="text-center w-100"  alt="..."/>
              <h3 className="card-text text-center ">{data.name}</h3>
            </div>
          </div>
      </div>
    );
  });

  return (
    <>
      <div className="container-fluid">
        <h1>Nhân Viên</h1>
        <hr />
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
        <hr />
        {DetailsStaff()}
        
        
        
      </div>
    </>
  );
}
