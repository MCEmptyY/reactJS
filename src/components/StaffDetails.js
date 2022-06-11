import { useState } from "react";
import { useParams } from "react-router-dom";

import { STAFFS } from "./staffs/staffs";

const DetailsStaff = () => {
  const { staffId } = useParams();
  const [createDetailsStaff, setStaff] = useState(STAFFS);

  const Infor = createDetailsStaff.map((staff) => {
    if (staff.id === +staffId)
      return (
        <div key={staff.id} className="row m-3">
          <div className="pb-3">
            <a href="/staff">Nhân viên</a>
            <span> / {staff.name}</span>
          </div>
          <div className="col-3 text-center pt-4">
            <img
              src={require("./staffs/staff.png")}
              className="text-center w-50 "
              alt="..."
            />
          </div>
          <div className="col-6 px-4 fw-bold ">
            <h1 className="text-danger">Họ và tên: {staff.name} </h1>
            <p className="h3">
              Ngày sinh: {new Date(staff.doB).toLocaleDateString()}
            </p>
            <p className="h3">
              Ngày vào công ty: {new Date(staff.startDate).toLocaleDateString()}
            </p>
            <p className="h3">Phòng ban: {staff.department.name}</p>
            <p className="h3">Số ngày nghỉ còn lại: {staff.annualLeave}</p>
            <p className="h3">Số ngày làm thệm: {staff.overTime}</p>
          </div>
        </div>
      );
  });

  return <div>{Infor}</div>;
};

export default DetailsStaff;
