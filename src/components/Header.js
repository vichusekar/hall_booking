import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

    let user = JSON.parse(localStorage.getItem("user-info"))
    let navigate = useNavigate()

    function Logout(){
        localStorage.clear()
        navigate('/')
    }
    return <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand onClick={() => navigate('/')}>Home</Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    {
                        localStorage.getItem("user-info") ?
                            <>
                                <Nav>
                                    <NavDropdown title={user && user.name} >
                                        <NavDropdown.Item onClick={Logout}>
                                            LogOut
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </>
                            :
                            <>
                                <Nav.Link onClick={()=>navigate('/sign-up')} >SignUp</Nav.Link>
                            </>
                        // :
                        // <><Nav.Link >
                        //     Dank memes
                        // </Nav.Link>}</>

                    }
                </Nav>

            </Container>

        </Navbar >
    </>
}

export default Header
