import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../pages/CSS/Home.css"; // custom styles

const HomePage = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
                <Container>
                    <Navbar.Brand as={Link} to="/">🌾 Smart Crop Recommender</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Register</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            <div className="hero-section text-white d-flex align-items-center">
                <Container className="text-center">
                    <motion.h1
                        className="display-3 fw-bold mb-3"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Welcome to Smart Crop Recommender
                    </motion.h1>
                    <motion.p
                        className="lead mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Empowering farmers with AI-powered crop suggestions for better yields 🌱
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <Button variant="success" as={Link} to="/signup">
                            🚀 Get Started
                        </Button>
                    </motion.div>
                </Container>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-light text-center py-3 mt-5">
                <Container>
                    <p className="mb-0">
                        © {new Date().getFullYear()} Smart Crop Recommender. All rights reserved.
                    </p>
                </Container>
            </footer>
        </>
    );
};

export default HomePage;
