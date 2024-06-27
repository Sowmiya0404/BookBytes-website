import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-bar">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="bookbytes" width={"100px"} height={"30px"}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='justify-content-end ms-auto'> 
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            <Nav.Link as={Link} to="about">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;