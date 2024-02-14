import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {

    let navigate = useNavigate()
  return <>
   <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => navigate('/dashboard')}>Dashboard</Nav.Link>
                </Nav>
            </Container>
            <Nav>
                <Nav.Link onClick={() => navigate('/sign-in')}>SignIn</Nav.Link>
                <Nav.Link eventKey={2} onClick={() => navigate('/sign-up')}>SignUp
                </Nav.Link>
            </Nav>
        </Navbar>
  </>
}

export default Header
