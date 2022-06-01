import { useParams } from "react-router-dom";
import { STAFFS } from "../db/staffs/staffs";

export default function DetailsStaff() {
  const { staffId } = useParams();

  const staffData = STAFFS.find(staff => staff.id === +staffId)

  return (
      <>
          <div key={staffData.id} className="row m-3">
              <div className="pb-3">
                  <a href="/staff">Nhân viên</a>
                  <span> / {staffData.name}</span>
              </div>
              <div className="col-3 text-center pt-4">
                  <img
                      src={require("../db/staffs/staff.png")}
                      className="text-center w-50 "
                      alt="..."
                  />
              </div>
              <div className="col-6 px-4 fw-bold ">
                  <h1 className="text-danger">Họ và tên: {staffData.name} </h1>
                  <p className="h3">
                      Ngày sinh: {new Date(staffData.doB).toLocaleDateString()}
                  </p>
                  <p className="h3">
                      Ngày vào công ty: {new Date(staffData.startDate).toLocaleDateString()}
                  </p>
                  <p className="h3">Phòng ban: {staffData.department.name}</p>
                  <p className="h3">Số ngày nghỉ còn lại: {staffData.annualLeave}</p>
                  <p className="h3">Số ngày làm thệm: {staffData.overTime}</p>
              </div>
          </div>
      </>
  );
};
