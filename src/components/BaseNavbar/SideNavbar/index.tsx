import React, { useRef, useState } from 'react';
import './SideNavbar.sass';
import {
  Nav,
  Popover,
  Overlay
} from 'react-bootstrap'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { NavbarLogo, Avatar } from './../common' 

const SubMenu = ({ isVisible, target, ref }: any) => (
  <div ref={ref}>
    <Overlay
      show={isVisible}
      target={target}
      placement="right-start"
    >
      <Popover id="popover-contained">
        <Popover.Title className="px-2 accountmenu__title">
          <span className="accountmenu__avatar-container">
            <Avatar className="accountmenu__title-avatar"/>
          </span>
          <span className="accountmenu__title-text">
            Steve Wozniak
          </span>
        </Popover.Title>
        <Popover.Content className="accountmenu__content p-0">
          <div><span>Account</span></div>
          <div><span>Your Exports</span></div>
          <div><span>Integrations</span></div>
          <div className="text-primary">Logout</div>
        </Popover.Content>
      </Popover>
    </Overlay>
  </div>
)

const AccountMenu = ({ isVisible, target }: any) => {
  const accountMenuRef = useRef(null)
  const [showSubmenu, setShowSubmenu] = useState(false)

  return (
    <div>
      <SubMenu target={accountMenuRef.current} isVisible={showSubmenu}/>
      <Overlay
        show={isVisible}
        target={target}
        placement="right-end"
      >
        <Popover id="popover-contained">
          <Popover.Title className="px-2 accountmenu__title" ref={accountMenuRef}>
            <span className="accountmenu__avatar-container">
              <Avatar className="accountmenu__title-avatar"/>
            </span>
            <span className="accountmenu__title-text">
              Steve Wozniak
            </span>
          </Popover.Title>
          <Popover.Content className="accountmenu__content p-0">
            <div onClick={() => {setShowSubmenu(!showSubmenu)}}>
              <span className={cx({"accountmenu__content--active": showSubmenu})}>
                Account
              </span>
            </div>
            <div><span>Your Exports</span></div>
            <div><span>Integrations</span></div>
            <div className="text-primary">Logout</div>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  )
}

export default function SideNavbar(props: any) {
  const avatarRef = useRef(null)
  const [isAcctMenuVisible, setIsAcctMenuVisible] = useState(false)

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
          <i className={`bi ${icon} sidenav__icon`}></i>
          <div>{label}</div>
        </Link>
      )}

      <div className="mt-auto sidenav__avatar-container">
        <div ref={avatarRef}>
          <Avatar 
            className="sidenav__avatar" 
            onClick={() => {setIsAcctMenuVisible(!isAcctMenuVisible)}}
          />
        </div>
      </div>
      
      <AccountMenu target={avatarRef.current} isVisible={isAcctMenuVisible}/>
    </Nav>
  )
}