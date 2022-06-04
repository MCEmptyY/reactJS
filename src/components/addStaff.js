import React from "react";

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
} from "reactstrap";

function AddStaff(props) {
  const isOpen = props.isOpen;
  const toggle = props.toggle;

  return (
    <>
      <div>
        <Modal isOpen={isOpen}>
          <ModalHeader toggle={toggle}>Thêm Nhân Viên</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Tên:</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tên Nhân Viên"
                  type="text"
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
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>Phòng ban:</Label>
                <Input
                  id="Department"
                  name="Department"
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
                  id="scalary"
                  name="scalary"
                  placeholder="Hệ số lương"
                  type="number"
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>Số ngày nghỉ còn lại:</Label>
                <Input
                  id="annualLeave"
                  name="annualLeave"
                  placeholder="Số ngày nghỉ còn lại"
                  type="number"
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label>Số ngày đã làm thêm:</Label>
                <Input
                  id="overtime"
                  name="overtime"
                  placeholder="Số ngày đã làm thêm"
                  type="number"
                ></Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Thêm</Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default AddStaff;
