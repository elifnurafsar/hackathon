import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavbarComp() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">QR Receipt</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Receipts</Nav.Link>
                <Nav.Link href="#pricing">Profile</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default NavbarComp