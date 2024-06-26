import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';


export const ContactForm = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState("");

    const onFormUpdate = ( category, value ) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        //const url = `${window.location.origin}/contacts`;;
        const url = 'dummy';;
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;chatset=utf-8'
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message Sent Successfully' });
        } else {
            setStatus({ success: false, message: 'Message Failed to Send' });
        }
    }

    return (
        <section className="contact" id="contacts">
            <Container>
                <Row className="aling-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Me" />
                        
                    </Col>
                    <Col md={6}>
                        <h2> Get In Touch </h2>
                        <h3>This was totally working but costs too much memory than I have in the heroku plan I am willing to pay for.
                            I would love to still hear from you at bremy@vassar.edu. Thanks!
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>

                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}