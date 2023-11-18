import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import pokeapi from '../img/pokeapi.png'

const NavBar = () => {
  const setActiveClass = ({ isActive }) => isActive 
                                            ? "text-danger mt-2" 
                                            : "text-warning mt-2";

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img className="img-poke" src={ pokeapi} alt="" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
         <Nav className="gap-2">
          <NavLink className={setActiveClass} to="/">
            Home
          </NavLink>
          <NavLink className={setActiveClass} to="/pokemones">
            Pokemones
          </NavLink>  
        </Nav>   
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
