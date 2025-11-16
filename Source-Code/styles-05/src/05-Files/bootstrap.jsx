import { Button } from "react-bootstrap";
import { Alert, Container, Nav, Navbar   } from 'react-bootstrap'; 
import NavDropdown from 'react-bootstrap/NavDropdown';

function Boot() {
  return (
    <div>
 

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <h3>Hello React Bootstrap </h3>
      <button onClick={() => alert("hello")}>hello</button>
      <Alert variant="success">hello</Alert>
      <Alert variant="dark">hello</Alert>

      <Button variant="danger" onClick={() => alert("hello bootstrap button")}>Click</Button>
      <Button variant="info">Click</Button>

      <Button variant="outline-warning">Click</Button>
      <Button variant="outline-danger">Click</Button>
    </div>
  )
}
export default Boot;