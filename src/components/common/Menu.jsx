import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png';

const Menu = () => {
  return (
    <Navbar expand="lg" className='bgNavBar' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" className='img-fluid logo'/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Recetas</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <Nav.Link href="#link">Administrador</Nav.Link>
            <NavDropdown title="Ingresar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Iniciar Sesión
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Registrarse</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;