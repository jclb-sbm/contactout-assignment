import React, { useEffect, useRef, useState } from 'react';
import './TopNavbar.sass';
import {
  Button,
  Nav,
  Navbar,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavbarLogo, Avatar } from './../common' 

export default function TopNavbar(props: any) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="topnav">
      <Navbar.Brand href="/">
        <NavbarLogo className="topnav__logo"/>
      </Navbar.Brand>
      <div className="d-flex flex-row">
        {/* <OverlayTrigger trigger="click" placement="bottom-end" overlay={AccountMenu2}> */}
          <Button bsPrefix="sidenav__avatar-button">
            <Avatar className="topnav__avatar"/>
          </Button>
        {/* </OverlayTrigger> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="my-1" />
      </div>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {props.links.map((link: any) => 
            <Link
              className="topnav__link"
              key={`top-${link.url}${link.label}`}
              to={link.url}>{link.label}
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}