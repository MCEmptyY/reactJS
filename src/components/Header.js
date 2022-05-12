import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faIdCard,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <>
      <h1 className="bg-primary p-3 text-light">
        Ứng dụng quản lý nhân sự V1.0
        <ul className="nav mt-2">
          <li className="nav-item">
            <Link className="nav-link text-warning h4" to="/staff">
              <FontAwesomeIcon
                className="h4 m-1 text-light"
                icon={faUsers}
              ></FontAwesomeIcon>
              Nhân Viên
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning h4" to="/department">
              <FontAwesomeIcon
                className="h3 m-1 text-light"
                icon={faIdCard}
              ></FontAwesomeIcon>
              Phòng Ban
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning h4" to="/salary">
              <FontAwesomeIcon
                className="h3 m-1 text-light"
                icon={faMoneyBillTransfer}
              ></FontAwesomeIcon>
              Bảng Lương
            </Link>
          </li>
        </ul>
      </h1>
    </>
  );
}
