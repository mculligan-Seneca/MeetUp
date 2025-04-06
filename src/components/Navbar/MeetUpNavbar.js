import React from 'react';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';


export default function MeetUpNavbar({navLinks}) {

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Meetup</Navbar.Brand>
                    <Nav className='me-auto'>
                        {navLinks.map((link)=><Nav.Link key={link.route} href={link.route}>{link.title}</Nav.Link>)}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}