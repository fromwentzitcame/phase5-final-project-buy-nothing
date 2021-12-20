import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Toolbar() {
    return (
        <Nav>
            <NavMenu>
                <NavLink className='links' to='/'>
                   <span>home</span>
               </NavLink>
            </NavMenu>
        </Nav>
    )
}

export default Toolbar


const Nav = styled.nav`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    margin-top: 60px;
    background-color: #baccba;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 50px;
    letter-spacing: 16;
    z-index: -1
`;

const NavMenu = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  padding-top: 20px;
  a {
    display: flex;
    text-decoration: none;
    transition: all 200ms ease-out;
    span {
      color: #000000;
      font-size: 14px;
      letter-spacing: 1.42px;
    }
    &:hover {
        transform: scaleX(1.15);
      }
  }
`

