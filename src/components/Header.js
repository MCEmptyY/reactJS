import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1 className="bg-primary p-3 text-light">
        Ứng dụng quản lý nhân sự V1.0
        <ul className="nav mt-2">
          <li className="nav-item">
            <Link className="nav-link text-warning h4" to="/staff">
              Nhân Viên
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning h4" to="/department">
              Phòng Ban
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning h4" to="/salary">
              Bảng Lương
            </Link>
          </li>
        </ul>
      </h1>
    </>
  );
}
