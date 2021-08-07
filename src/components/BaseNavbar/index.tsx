import './BaseNavbar.sass';
import {
  Nav,
  Navbar,
} from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'

function Avatar(props: any) {
  return (
    <img
      className={props.className}
      src="/wozniak.jpg"
      alt="Navbar Avatar"
    />
  )
}

function NavbarLogo(props: any) {
  return (
    <img
      className={props.className}
      src="/sample-logo.png"
      alt="Navbar Logo"
    />
  )
}

function TopNavbar(props: any) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="topnav">
      <Navbar.Brand href="/">
        <NavbarLogo className="topnav__logo"/>
      </Navbar.Brand>
      <div className="d-flex flex-row">
        <Nav.Link href="/">
          <Avatar className="topnav__avatar"/>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="my-2" />
      </div>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {props.links.map((link: any) => 
            <Nav.Link
              key={`top-${link.url}${link.label}`}
              href={link.url}>{link.label}
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

function SideNavbar(props: any) {
  return (
    <Nav className="flex-column bg-dark sidenav">
      <Nav.Link href="/">
        <NavbarLogo className="sidenav__logo mt-4"/>
      </Nav.Link>
      {props.links.map((link: any) => 
        <Nav.Link 
          className="text-white text-center mt-2"
          key={`side-${link.url}${link.label}`} 
          href={link.url}
        >
          <i className={`bi ${link.icon} sidenav__icon`}></i>
          <div>{link.label}</div>
        </Nav.Link>
      )}
      <div className="mt-auto sidenav__avatar-container">
        <Nav.Link href="/">
          <Avatar className="sidenav__avatar"/>
        </Nav.Link>
      </div>
    </Nav>
  )
}



function BaseNavbar(props: any) {
  const isLgScreen = useMediaQuery({ query: '(min-width: 786px)' })

  return (isLgScreen ? <SideNavbar links={props.links}/> : <TopNavbar links={props.links}/>)
}

export default BaseNavbar;
