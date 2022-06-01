import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

export default function ModalCustom(props) {
    const isOpen = props.isOpen
    const toggle = props.toggle

    return (
        <>
            <Modal isOpen={isOpen} >
                <ModalHeader toggle={toggle}/>
                <ModalBody>
                    <h1>Toan</h1>
                </ModalBody>
            </Modal>
        </>
    )
}