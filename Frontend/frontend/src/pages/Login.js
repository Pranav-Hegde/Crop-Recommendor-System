import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import '../pages/CSS/Login.css'; // Optional for extra styles

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            if (res.status === 200) {
                window.location.href = "http://localhost:5001/CropForm.html";
            }
        } catch (err) {
            setError("❌ Invalid email or password");
        }
    };

    return (
        <div className="login-page d-flex align-items-center justify-content-center min-vh-100 bg-dark text-light">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={6} lg={5}>
                        <Card className="p-4 shadow rounded bg-light text-dark">
                            <h3 className="text-center mb-4">🌱 Smart Crop Recommender</h3>
                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="success" type="submit" className="w-100">
                                    🔓 Login
                                </Button>

                                {error && (
                                    <Alert variant="danger" className="mt-3 text-center">
                                        {error}
                                    </Alert>
                                )}

                                <div className="text-center mt-3">
                                    <small>
                                        Don't have an account?{" "}
                                        <a href="/signup" className="text-decoration-none">Register</a>
                                    </small>
                                </div>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginForm;
