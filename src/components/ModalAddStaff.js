import { Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Label, Row, Col, Button } from 'reactstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function ModalAddStaff(props) {
    const isOpen = props.isOpen
    const toggle = props.toggle

    const requiredErrorMsg = 'Bắt buộc nhập!'

    const initialStaff = {
        name: '',
        doB: '',
        salaryScale: 0,
        startDate: '',
        department: '',
        annualLeave: 0,
        overTime: 0
    }

    const staffSchema = Yup.object({
        name: Yup.string()
            .required(requiredErrorMsg),
        doB: Yup.date()
            .required(requiredErrorMsg),
        salaryScale: Yup.number()
            .positive()
            .required(requiredErrorMsg),
        startDate: Yup.date()
            .required(requiredErrorMsg),
        department: Yup.string()
            .required(),
        annualLeave: Yup.number()
            .positive()
            .required(requiredErrorMsg),
        overTime: Yup.number()
            .positive()
            .required(requiredErrorMsg)
    })

    const formik = useFormik({
        initialValues: initialStaff,
        validationSchema: staffSchema,
        onSubmit: values => {
            console.log(values)
        }
    })
    return (
        <>
            <Modal isOpen={isOpen}>
                <ModalHeader toggle={toggle}>
                    Thêm nhân viên
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            {/* name field */}
                            <Label for="name">
                                Tên nhân viên
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Tên nhân viên"
                                type="text"
                                className={formik.errors.name && formik.touched.name ? 'is-invalid' : ''}
                                {...formik.getFieldProps('name')}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <small className="text-danger">{formik.errors.name}</small>
                            ) : null}
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    {/* doB field */}
                                    <Label for="doB">
                                        Ngày sinh
                                    </Label>
                                    <Input
                                        id="doB"
                                        name="doB"
                                        placeholder="Ngày sinh nhân viên"
                                        type="date"
                                        className={formik.errors.doB && formik.touched.doB ? 'is-invalid' : ''}
                                        value={formik.values.doB}
                                        {...formik.getFieldProps('doB')}
                                    />
                                    {formik.touched.doB && formik.errors.doB ? (
                                        <small className="text-danger">{formik.errors.doB}</small>
                                    ) : null}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    {/* startDate field*/}
                                    <Label for="startDate">
                                        Ngày vào Công ty
                                    </Label>
                                    <Input
                                        id="startDate"
                                        name="startDate"
                                        placeholder="Ngày vào"
                                        type="date"
                                        value={formik.values.startDate}
                                        onChange={formik.handleChange}
                                        className={formik.touched.startDate && formik.errors.startDate ? 'is-invalid' : ''}
                                    />
                                    {formik.touched.startDate && formik.errors.startDate ? (
                                        <small className="text-danger">{formik.errors.name}</small>
                                    ) : null}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    {/* salaryScale field */}
                                    <Label for="salaryScale">
                                        Hệ số lương
                                    </Label>
                                    <Input
                                        id="salaryScale"
                                        name="salaryScale"
                                        placeholder="Hệ số lương"
                                        type="number"
                                        value={formik.values.salaryScale}
                                        onChange={formik.handleChange}
                                        className={formik.touched.salaryScale && formik.errors.salaryScale ? 'is-invalid' : ''}
                                    />
                                    {formik.touched.salaryScale && formik.errors.salaryScale ? (
                                        <small className="text-danger">{formik.errors.name}</small>
                                    ) : null}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    {/* department field */}
                                    <Label for="department">
                                        Phòng ban
                                    </Label>
                                    <Input
                                        id="department"
                                        name="department"
                                        placeholder="Phòng ban"
                                        type="select"
                                        value={formik.values.department}
                                        onChange={formik.handleChange}
                                        className={formik.touched.department && formik.errors.department ? 'is-invalid' : ''}
                                    >
                                        <option>IT</option>
                                        <option>HR</option>
                                        <option>Sale</option>
                                        <option>Kế toán</option>
                                    </Input>
                                    {formik.touched.department && formik.errors.department ? (
                                        <small className="text-danger">{formik.errors.name}</small>
                                    ) : null}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    {/* annualLeave field */}
                                    <Label for="annualLeave">
                                        Ngày phép còn lại
                                    </Label>
                                    <Input
                                        id="annualLeave"
                                        name="annualLeave"
                                        placeholder="Số ngày nghỉ phép còn lại"
                                        type="number"
                                        value={formik.values.annualLeave}
                                        onChange={formik.handleChange}
                                        className={formik.touched.annualLeave && formik.errors.annualLeave ? 'is-invalid' : ''}
                                    />
                                    {formik.touched.annualLeave && formik.errors.annualLeave ? (
                                        <small className="text-danger">{formik.errors.name}</small>
                                    ) : null}
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    {/* overTime field */}
                                    <Label for="overTime">
                                        Số giờ OT
                                    </Label>
                                    <span className="icon-case">
                                        <i className="fa fa-comments-o"></i>
                                    </span>
                                    <Input
                                        id="overTime"
                                        name="overTime"
                                        placeholder="Số giờ tăng ca"
                                        type="number"
                                        value={formik.values.overTime}
                                        onChange={formik.handleChange}
                                        className={formik.touched.overTime && formik.errors.overTime ? 'is-invalid' : ''}
                                    />
                                    {formik.touched.overTime && formik.errors.overTime ? (
                                        <small className="text-danger">{formik.errors.name}</small>
                                    ) : null}
                                </FormGroup>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-center">
                            <Button className="w-25 mx-2" type="button" color="secondary" onClick={toggle}>
                                Huỷ
                            </Button>
                            <Button className="w-25" type="submit" color="primary">
                                Xác nhận
                            </Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}