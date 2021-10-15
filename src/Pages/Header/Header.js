import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';



const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" sticky='top' variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to="/home">Navbar</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {user?.email ? <Button onClick={logOut} variant="light">logout</Button>
                            : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {user?.email && <Navbar.Text>
                            <span> Signed in as:</span> <a href="#login">{user.displayName}</a>
                        </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;