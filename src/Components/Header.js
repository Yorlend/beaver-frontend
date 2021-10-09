import React, {Component} from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Navbar sticky="top" collapseOnSelect expand="md" bg="white" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="/icon.png"
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> Web Beavers
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/photosets" className="py-2 py-md-0 px-md-4 text-dark">Датасеты</Link>
                            <Link to="/devices" className="py-2 py-md-0 px-md-4 text-dark">Устройства</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
