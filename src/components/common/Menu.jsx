import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

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
            <NavLink to="/" className="nav-link">Inicio</NavLink>
            <NavLink to="/" className="nav-link">Recetas</NavLink>
            <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
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