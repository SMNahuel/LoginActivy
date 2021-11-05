import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Hamburger from 'hamburger-react';

const NavbarComponent = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Navbar bg="dark" variant="dark">
            <Hamburger color="#96C7C1" toggled={isOpen} toggle={setOpen} />
            {
                isOpen && 
                <Container>
                    <Navbar.Brand href="#home">Proyecto</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="features">Features</Nav.Link>
                        <Nav.Link href="pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            }
            </Navbar>
        </>
    )
}

export default NavbarComponent;