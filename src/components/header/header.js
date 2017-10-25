import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './header.css';

export const Header = () =>
  <Navbar inverse collapseOnSelect staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Movies Project</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem componentClass="span">
          <Link className="link" to='/movies'>Movies</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
   

export default withRouter(Header)