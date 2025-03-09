/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.png";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HeaderContainer } from "./Header.element";
//
function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Navbar expand='sm'>
          <Navbar.Brand href='#home'>
            <img
              src={Logo}
              className='card-img-top'
              alt='...'
              style={{ width: "5rem" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>
                <Link to='/' className='nav-decoration'>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link to='login'>
                <Link to='login' className='nav-decoration'>
                  Login
                </Link>
              </Nav.Link>

              <Nav.Link href='#action/3.1'>
                <Link to='letting' className='nav-decoration'>
                  Letting
                </Link>
              </Nav.Link>
              <NavDropdown title='Admin' id='nav-dropdown'>
                <NavDropdown.Item eventKey='4.1'>
                  {" "}
                  <Link to='rentalForm' className='nav-decoration'>
                    Add Property
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='4.1'>
                  {" "}
                  <Link to='register' className='nav-decoration'>
                    Add user admin
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Nav className='bd-grid'>
        <div>
          <a href='#' className='nav_logo'>
            Seedy
          </a>
        </div>

        <div id='nav-menu'>
          <ul className='nav_list'>
            <li className='nav_item'>
              <a href='#home' className='nav_link active'>
                Home
              </a>
            </li>

            <li className='nav_item'>
              <a href='#skills' className='nav_link'>
                Skills
              </a>
            </li>
            <li className='nav_item'>
              <a href='#work' className='nav_link'>
                Works
              </a>
            </li>
            <li className='nav_item'>
              <a href='#contact' className='nav_link'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='nav_toggle' id='nav-toggle'>
          <i className='bx bx-menu'></i>
        </div>
      </Nav> */}
      </Container>
    </HeaderContainer>
  );
}

export default Header;
