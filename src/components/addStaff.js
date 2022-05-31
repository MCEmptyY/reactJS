import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default function AddStaff({ open }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  if (!open) return null;
  return (
    <>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <Form>
            <Label>Thêm Nhân Viên</Label>
            <Button>X</Button>
            <FormGroup>
              <Label>Tên:</Label>
              <Input type="text"></Input>
              <Label>Ngày sinh:</Label>
              <Input type="date"></Input>
              <Label>Ngày vào công ty:</Label>
              <Input type="date"></Input>
              <Label>Phòng ban:</Label>
              <Input type="select"></Input>
              <Label>Hệ số lương:</Label>
              <Input type="text"></Input>
              <Label>Số ngày nghỉ:</Label>
              <Input type="text"></Input>
              <Label>Số ngày đã làm thêm:</Label>
              <Input type="text"></Input>
            </FormGroup>
            <Button color="primary">Thêm</Button>
          </Form>
        </Modal>

        {/* <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader>Title</ModalHeader>
          <ModalBody>
            <h1>Hello</h1>
          </ModalBody>
          <ModalFooter>Ok</ModalFooter>
        </Modal> */}
      </div>
    </>
  );
}
