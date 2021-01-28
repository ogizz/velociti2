import React, { useState } from 'react'
import {
    Button,
    Modal,
    Form,


    Row,
    Col,
} from 'react-bootstrap';

import {
    InputGroupText,
    InputGroup,
    InputGroupAddon, Input
} from 'reactstrap'


const FormPop = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>

            <Button
                className="btn-round"
                color="success"
                href="#pablo"

                onClick={handleShow}
            >
                Get Quote now!
              </Button>

            <Modal style={customStyles} show={show} onHide={handleClose}>
                
                <Modal.Body>
                    <Form className="contact-form">
                        <Row>
                            <Col md="6">
                                <label>Name</label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="nc-icon nc-single-02" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Name" type="text" />
                                </InputGroup>
                            </Col>
                            <Col md="6">
                                <label>Email</label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="nc-icon nc-email-85" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Email" type="text" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <label>Message</label>
                        <Input
                            placeholder="Tell us your thoughts and feelings..."
                            type="textarea"
                            rows="4"
                        />

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default FormPop;