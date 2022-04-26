import React from "react";
import { STAFFS } from "./staffs/staffs";

export default function SalaryComponents() {
  const Salary = STAFFS.map((c) => {
    let total = c.salaryScale * 3000000 + c.overTime * 200000;
    let Salary = parseInt(total);
    return (
      <>
        <div className="col-lg-4 col-md-6">
          <div className="card border-danger m-3">
            <div className="card-title h1 px-3 text-warning">{c.name}</div>
            <hr />
            <div className="card-body px-5">
              <div className="card-text">Mã Nhân viên: {c.id}</div>
              <div className="card-text">Hệ số lương: {c.salaryScale}</div>
              <div className="card-text">Số giờ làm thêm: {c.overTime}</div>
              <div className="card-text fw-bold ">Lương: {Salary} </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="px-3">
        <a href="/staff">Nhân viên</a>
        <span> / Bảng lương</span>
      </div>
      <div className="row">{Salary}</div>;
    </>
  );
}
