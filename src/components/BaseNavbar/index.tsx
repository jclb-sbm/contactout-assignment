import './BaseNavbar.sass';
import {
  Nav,
  Navbar,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom'

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
        <Link to="/">
          <Avatar className="topnav__avatar"/>
        </Link>
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

function SideNavbar(props: any) {
  const isActiveLink = (url: string) => {
    return url === props.path 
      ? 'sidenav__link--active'
      : 'sidenav__link--inactive'
  }

  return (
    <Nav className="flex-column bg-dark sidenav">
      <Link to="/">
        <NavbarLogo className="sidenav__logo mt-4"/>
      </Link>
      {props.links.map(({url, label, icon}: any) => 
        <Link 
          className={`text-white text-center mt-2 sidenav__link ${isActiveLink(url)}`}
          key={`side-${url}${label}`} 
          to={url}
        >
          <div className="">
            <i className={`bi ${icon} sidenav__icon`}></i>
            <div>{label}</div>
          </div>
        </Link>
      )}
      <div className="mt-auto sidenav__avatar-container">
        <Link to="/">
          <Avatar className="sidenav__avatar"/>
        </Link>
      </div>
    </Nav>
  )
}

function BaseNavbar(props: any) {
  const location = useLocation()
  const isLgScreen = useMediaQuery({ query: '(min-width: 786px)' })
  return (
    isLgScreen 
      ? <SideNavbar links={props.links} path={location.pathname} /> 
      : <TopNavbar links={props.links} />
  )
}

export default BaseNavbar;
