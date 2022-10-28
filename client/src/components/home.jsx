import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const home = () => {
  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MUSIXON</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link><br></br>
            <Nav.Link href="#search">Search</Nav.Link><br></br>
            <Nav.Link href="#library">Your Library</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    

    
  )
}

export default home


