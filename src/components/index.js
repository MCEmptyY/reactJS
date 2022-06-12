import Header from './Header'
import { Route, Routes, Navigate } from 'react-router-dom'
import StaffList from '../pages/StaffList'
import DetailsStaff from '../pages/StaffDetails'
import DepartmentStaff from '../pages/Department'
import Salary from '../pages/Salary'
import React, { useEffect, useState } from 'react'
import { fetchStaff } from '../redux/actions/StaffAction'
import { connect, useDispatch, useSelector } from 'react-redux'

function Main(props) {
    const dispatch = useDispatch()

    dispatch(fetchStaff())

    return (
        <>
            <Header />
            <Routes>
                <Route path="/staff" element={<StaffList />}></Route>
                {/*<Route path="/staff/:staffId" element={<DetailsStaff />} />*/}
                {/*<Route path="/Department" element={<DepartmentStaff />}></Route>*/}
                {/*<Route path="/Salary" element={<Salary />}></Route>*/}
                <Route path="/" element={<Navigate replace to="/staff" />}></Route>
            </Routes>
        </>
    )
}

export default Main