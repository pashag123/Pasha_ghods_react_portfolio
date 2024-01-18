import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap'; 
import './Contact.css';

function Contact() {
    return (
        <div className="contact-form">
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    <Form.Control
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon2"
                        type="email" 
                    />
                    <InputGroup.Text id="basic-addon2"></InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text>Message</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>

                <Button variant="primary" type="submit">Submit</Button> 
            </Form>
        </div>
    );
}

export default Contact;
