import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavHeader
  } from './NavbarElement';
  import logo from '../../assets/logo/Shift4_logo.svg';
  import chatIcon from '../../assets/icons/LIveChat_icon.svg';
  import calendarIcon from '../../assets/icons/Calendar_icon.svg';
  import emailIcon from '../../assets/icons/Email_icon.svg';
  import phoneIcon from '../../assets/icons/Mobile_icon.svg';
  import {BsChevronDown} from 'react-icons/bs';
  import Collapsible from './collapsibleBar';
  
  const Navbar = () => {
    return (
      <>
        {/* <Nav>
          <NavLink to='/'>
            <img src={logo} alt='logo' />
          </NavLink> */}
          <Collapsible/>
          {/* <Bars />
          <NavMenu>
            <NavHeader to='/about' activeStyle>
              POS Order Support:
            </NavHeader>
            <NavLink to='/services' activeStyle>
            <img src={chatIcon} alt='chat' />
              Live Chat
            </NavLink>
            <NavLink to='/contact-us' activeStyle>
            <img src={calendarIcon} alt='calendar' />
              Schedule an Appointment
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
            <img src={emailIcon} alt='email' />
              johnsmith@shift4.com
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
            <img src={phoneIcon} alt='mobile' />
              1-800-201-0461
            </NavLink>
            <BsChevronDown style={{color: '#fff', fontSize: '20px'}} />
          </NavMenu>
        </Nav> */}
      </>
    );
  };
  
  export default Navbar;