import './BaseNavbar.sass';
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom'

import SideNavbar from './SideNavbar'
import TopNavbar from './TopNavbar';

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
