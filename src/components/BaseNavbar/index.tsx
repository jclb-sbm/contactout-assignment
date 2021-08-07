import './BaseNavbar.sass';
import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'

function SideNavbar(props: any) {
  return (
    <Nav 
      className="flex-column bg-dark sidenav"
    >
      {props.links.map((link: any) => 
        <Nav.Link 
          className="text-white text-center"
          key={`side-${link.url}${link.label}`} 
          href={link.url}
        >
          <div>
            <i className={`bi ${link.icon} sidenav__icon`}></i>
            <div>
              {link.label}
            </div>
          </div>
        </Nav.Link>
      )}
    </Nav>
  )
}

function TopNavbar(props: any) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
      </Container>
    </Navbar>
  )
}

function BaseNavbar(props: any) {
  const isLgScreen = useMediaQuery({ query: '(min-width: 786px)' })

  return (isLgScreen ? <SideNavbar links={props.links}/> : <TopNavbar links={props.links}/>)
}

export default BaseNavbar;
