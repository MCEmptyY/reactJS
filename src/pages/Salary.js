import React from 'react'
import { STAFFS } from '../db/staffs/staffs'
import NumberFormat from 'react-number-format'

export default function Salary() {
    const calculateSalary = (salaryScale, overTime) => (salaryScale * 3000000 + overTime * 2000000)

    const renderSalaryList = STAFFS.map((v) => {
        return (
            <>
                <div className="col-lg-4 col-md-6">
                    <div className="card border-danger m-3">
                        <div className="card-title h1 px-3 text-warning">{v.name}</div>
                        <hr />
                        <div className="card-body px-5">
                            <div className="card-text">Mã Nhân viên: {v.id}</div>
                            <div className="card-text">Hệ số lương: {v.salaryScale}</div>
                            <div className="card-text">Số giờ làm thêm: {v.overTime}</div>
                            <div className="card-text fw-bold ">
                                Lương:{" "}
                                <NumberFormat
                                    value={calculateSalary(v.salaryScale, v.overTime)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                /> VNĐ
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            <div className="px-3">
                <a href="/staff">Nhân viên</a>
                <span> / Bảng lương</span>
            </div>
            <div className="row">{renderSalaryList}</div>
            ;
        </>
    )
}
