import { Component } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

class MainNav extends Component {
  render() {
    return (
      <>
        <Navbar bg="warning" variant="black">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#browser">Browser</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default MainNav;
