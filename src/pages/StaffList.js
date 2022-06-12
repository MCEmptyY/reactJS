import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { createSelectorHook, useDispatch, useSelector } from 'react-redux'
import { fetchStaff } from '../redux/actions/StaffAction'
import { staffsState$ } from '../redux/selector'

// const renderStaff = (staffs) => {
//     return (
//         <div key={staff.id} className="col-2 mt-3">
//             <Link to={`/v/${staff.id}`}>
//                 <div className="card">
//                     <div className="card-body bg-warning">
//                         <img
//                             src={require('../db/staffs/staff.png')}
//                             className="text-center w-100"
//                             alt="..."
//                         />
//                         <h3 className="card-text text-center ">{staff.name}</h3>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     );
// };

export default function StaffList(props) {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        return dispatch(fetchStaff())
    }, [dispatch])

    const staffs = useSelector(staffsState$)
    console.log(staffs)
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-end w-100 mt-2">
                    <Form inline>
                        <FormGroup floating>
                            <Input id="search"
                                   name="search"
                                   placeholder="Tìm kiếm nhân viên"
                                   onChange={handleInputChange}
                            />
                            <Label>Tìm nhân viên</Label>
                        </FormGroup>
                    </Form>
                </div>
                <div className="row">
                    {/*{filteredStaff.map(staff => {*/}
                    {/*    return renderStaff(staff)*/}
                    {/*})}*/}
                </div>
            </div>
        </>
    )
}
