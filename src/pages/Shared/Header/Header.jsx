import React from 'react';
import logo from '../../../../src/assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
           <div className="text-center">
                <img src={logo} alt="" />
                <p className="text-secondary">Journalism Without Fear or Favour </p>
                <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
           </div>
           <div className='d-flex'>
           <Button variant="danger">Danger</Button>
           <Marquee className='text-danger' speed={150}>
             I can be a React component, multiple React components, or just some text.
           </Marquee>
           </div>
           <Navbar expand="lg" bg="light" className="bg-body-tertiary">
      <Container>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Carrer</Nav.Link>
            </Nav>
          <Nav className="d-flex">
          <Nav.Link href="#home">More Details</Nav.Link>
            <Nav.Link href="#link"><Button variant="secondary">Login</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;