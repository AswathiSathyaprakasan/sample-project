import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Contact Us</h5>
                        <p>Email: contact@mindease.com</p>
                        <p>Phone: +123 456 7890</p>
                        <p>Address: 123 MindEase St, City, Country</p>
                    </Col>
                    <Col md={6}>
                        <h5>Feedback</h5>
                        <Form>
                            <Form.Group controlId="feedbackForm.ControlTextarea">
                                <Form.Label>Your Feedback</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter your feedback here..." />
                            </Form.Group>
                            <Button variant="outline-light" type="submit" className="mt-2">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
