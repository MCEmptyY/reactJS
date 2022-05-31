import React, { useState } from "react";
import { Link } from "react-router-dom";

import { STAFFS } from "./staffs/staffs";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

import Addstaff from "./addStaff";

export default function Stafflist() {
  const [input, setInput] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);

  const handlesubmit = (event) => {
    event.preventDefault();
  };

  console.log(input);
  const renderStafflist = STAFFS.filter((val) => {
    return val.name.toLowerCase().includes(input.toLowerCase());
  }).map((staff) => {
    return (
      <div key={staff.id} className="col-2 mt-3">
        <Link to={`/staff/${staff.id}`}>
          <div className="card">
            <div className="card-body bg-warning">
              <img
                src={require("./staffs/staff.png")}
                className="text-center w-100"
                alt="..."
              />
              <h3 className="card-text text-center">{staff.name}</h3>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="p-5">
        <Button color="danger" onClick={() => setOpenModal(!openModal)}>
          +
        </Button>
        <Modal isOpen={openModal} toggle={toggle}>
          <ModalHeader>
            Thêm Nhân Viên
            <Button style={{ margin: "0 0 0 17rem" }}>X</Button>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Tên:</Label>
                <Input type="text" invalid></Input>
                <FormFeedback>Yêu cầu nhập</FormFeedback>
              </FormGroup>
              <Label>Ngày sinh:</Label>
              <Input type="date" invalid></Input>
              <Label>Ngày vào công ty:</Label>
              <Input type="date" invalid></Input>
              <Label>Phòng ban:</Label>
              <Input type="select"></Input>
              <Label>Hệ số lương:</Label>
              <Input type="text"></Input>
              <Label>Số ngày nghỉ:</Label>
              <Input type="text"></Input>
              <Label>Số ngày đã làm thêm:</Label>
              <Input type="text"></Input>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Thêm</Button>
          </ModalFooter>
        </Modal>
      </div>
      <hr />
      <form onSubmit={handlesubmit}>
        <div className="row">
          <div className="col-6 mt-2 text-center"></div>
          <div className="col-6">
            <div className="text-center">
              <label className="h3 fw-bold">Tìm nhân viên: </label>
              <input
                type="text"
                value={input}
                className="col-form-label m-2"
                onChange={(e) => setInput(e.target.value)} // update giá trị của state --> giá trị ở đây là value={input}
                placeholder="Search here ..."
              />
              {/* <input type="submit" value="Submit" className="btn btn-primary" /> */}
            </div>
          </div>
        </div>
      </form>
      <div className="container">
        <div className="row">{renderStafflist}</div>
      </div>
    </>
  );
}
