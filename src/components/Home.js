import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {

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
        <div style={{
            backgroundImage: `url("https://e0.pxfuel.com/wallpapers/311/363/desktop-wallpaper-dark-grey-solid-background-dark-web.jpg")`, height: '595px'
        }} >
            <div className='box-card'>
                <Card style={{ width: '18rem' }} >
                    <Card.Body>
                        <Card.Title>Hall Booking</Card.Title>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcwdhiL-NEC5LsojTA5NmUXCrZBNjPxE5OQ&usqp=CAU" alt='loading' />
                        <Button variant="primary" style={{marginTop:'10px',marginLeft:'60px'}} onClick={() => navigate('/sign-up')}>Book Here</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
}

export default Home
