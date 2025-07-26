import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../pages/CSS/Register.css'; // Custom styles

const RegisterForm = () => {
    const [cred, setCred] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/signup", cred);
            navigate("/login");
        } catch (err) {
            // Show ONLY this message if registration fails for any reason
            setError("❌ Email already exists");
        }
    };

    return (
        <div className="register-page">
            <div className="register-card shadow">
                <h3 className="text-center mb-4">Create Your Account</h3>
                <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={cred.name}
                            onChange={(e) => setCred({ ...cred, name: e.target.value })}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={cred.email}
                            onChange={(e) => setCred({ ...cred, email: e.target.value })}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={cred.password}
                            onChange={(e) => setCred({ ...cred, password: e.target.value })}
                            required
                        />
                    </Form.Group>

                    <Button variant="success" type="submit" className="w-100">
                        ✅ Register
                    </Button>

                    {error && (
                        <Alert variant="danger" className="mt-3 text-center">
                            {error}
                        </Alert>
                    )}

                    <div className="text-center mt-3">
                        <small>Already a member? <a href="/login">Login here</a></small>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default RegisterForm;
