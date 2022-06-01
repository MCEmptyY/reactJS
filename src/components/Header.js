import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import ModalAddStaff from './ModalAddStaff'

export default function Header() {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <div className="d-flex justify-content-between align-items-center bg-primary">
                <div>
                    <h1 className="p-3 text-light">
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
                </div>
                <div>
                    <Button color="danger" onClick={toggle}>
                        + Thêm nhân viên
                    </Button>
                    <ModalAddStaff isOpen={modal} toggle={toggle}/>
                </div>
            </div>
        </>
    )
}
