import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { useForm } from '@formspree/react';
import './Contact.css';

function Contact() {
    const [state, handleSubmit] = useForm("mrgneekg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="contact-form">
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    <Form.Control
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                        id="name"
                        name="name"
                    />
                </InputGroup>

                <InputGroup className="mb-3" >
                    <Form.Control
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon2"
                        type="email"
                        id="email"
                        name="email"
                    />
                    <InputGroup.Text id="basic-addon2"></InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text>Message</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea"  id="message"
        name="message" />
                </InputGroup>

                <Button variant="primary" type="submit" disabled={state.submitting}>Submit</Button>
            </Form>
        </div>
    );
}

export default Contact;
