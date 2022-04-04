import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Footer = styled.nav`
  background: #000;
  height: 100px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  z-index: 10;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  color: #fff;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const FooterTitle = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
`;

export const FooterBody = styled.div`
  color: #999999;
  font-size: 14px;
  width: 100%;
`;