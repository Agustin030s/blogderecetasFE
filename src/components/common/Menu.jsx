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
            <NavLink to="/recetas" className="nav-link">Recetas</NavLink>
            <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
            <NavLink to="/administrador" className="nav-link">Administrador</NavLink>
            <NavDropdown title="Ingresar" id="basic-nav-dropdown">
              <NavLink to="/login" className="dropdown-item">
                Iniciar Sesión
              </NavLink>
              <NavDropdown.Divider />
              <NavLink to="/registro" className="dropdown-item">Registrarse</NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;