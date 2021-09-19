import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import Modal from 'react-bootstrap/Modal';


export class DataModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showDataModal} onHide={this.props.handelDisplayDataModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.handelBmi}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>your Gender</Form.Label>
                                <Form.Control as="select" name="gender">
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Height</Form.Label>
                                <Form.Control type="text" name="height" placeholder="your Height" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>weight</Form.Label>
                                <Form.Control type="text" name="weight" placeholder="your Weight" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" name="age" placeholder="your Age" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>your Pishical Activety</Form.Label>
                                <Form.Control as="select" name="activety">
                                    <option value="1">sedentery</option>
                                    <option value="1.14">Low Active</option>
                                    <option value="1.27">Active</option>
                                    <option value="1.45">Very Active</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

export default DataModal
