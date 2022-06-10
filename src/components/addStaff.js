import React, { useEffect, useState } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { STAFFS } from "./staffs/staffs";

function AddStaff(props) {
  const [addNewUser, setaddNewUser] = useState(STAFFS);
  const [addData, setAddData] = useState({
    name: "",
    doB: "",
    salaryScale: 0,
    startDate: "",
    department: "",
    annualLeave: 0,
    overTime: 0,
  });

  const handleAddUserOnchange = (event) => {
    const fieldName = event.target.getAttribute("name"); // tìm thuộc tính name của các input
    const fieldValue = event.target.value; // lấy giá trị người dùng nhập

    const newFormData = { ...addData }; // copy lại state form người dùng :
    // useState({
    //   name: "",
    //   doB: "",
    //   salaryScale: 0,
    //   startDate: "",
    //   department: "",
    //   annualLeave: 0,
    //   overTime: 0,
    // }) ==         { ...addData }
    newFormData[fieldName] = fieldValue; // form thuộc tính cần nhập = giá trị nhập

    setAddData(newFormData); // cập nhật form vào state
  };

  const handleAddFormSubmit = (event) => {
    const newUser = {
      name: addData.name,
      doB: addData.doB,
      salaryScale: addData.salaryScale,
      startDate: addData.startDate,
      department: addData.department,
      annualLeave: addData.annualLeave,
      overTime: addData.overTime,
    };

    const newUsers = [...addNewUser, newUser]; // copy STAFFS đã có + user được add
    setaddNewUser(newUsers);
  };

  // useEffect render cuối cùng
  // sẽ render lại sau khi web re-render
  useEffect(() => {
    STAFFS.concat(addNewUser);
    console.log("changed");

    return () => {
      <>{addNewUser.name};</>;
    };
  }, [addNewUser]);

  const isOpen = props.isOpen;
  const toggle = props.toggle;

  return (
    <>
      <div>
        <Modal isOpen={isOpen}>
          <ModalHeader toggle={toggle}>Thêm Nhân Viên</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleAddFormSubmit}>
              <FormGroup>
                <Label>Tên:</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tên Nhân Viên"
                  type="text"
                  onChange={handleAddUserOnchange}
                  invalid
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>Ngày sinh:</Label>
                <Input
                  id="doB"
                  name="doB"
                  placeholder="Ngày sinh"
                  type="date"
                  invalid
                  onChange={handleAddUserOnchange}
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>Ngày vào công ty:</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  placeholder="Ngày vào công ty"
                  type="date"
                  invalid
                  onChange={handleAddUserOnchange}
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>Phòng ban:</Label>
                <Input
                  onChange={handleAddUserOnchange}
                  id="department"
                  name="department"
                  placeholder="Phòng ban"
                  type="select"
                >
                  <option>Sale</option>
                  <option>HR</option>
                  <option>Marketing</option>
                  <option>IT</option>
                  <option>Finance</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label>Hệ số lương:</Label>
                <Input
                  id="salaryScale"
                  name="salaryScale"
                  placeholder="Hệ số lương"
                  type="number"
                  onChange={handleAddUserOnchange}
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>Số ngày nghỉ còn lại:</Label>
                <Input
                  id="annualLeave"
                  name="annualLeave"
                  placeholder="Số ngày nghỉ còn lại"
                  type="number"
                  onChange={handleAddUserOnchange}
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>Số ngày đã làm thêm:</Label>
                <Input
                  id="overTime"
                  name="overTime"
                  placeholder="Số ngày đã làm thêm"
                  type="number"
                  onChange={handleAddUserOnchange}
                ></Input>
              </FormGroup>
              <hr />
              <div className="text-end">
                <Button className="w-25" type="submit" color="primary" onclick>
                  Thêm
                </Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}

export default AddStaff;
