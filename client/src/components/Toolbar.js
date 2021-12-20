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
               <NavLink className='links' to='/'>
                   <span>profile</span>
               </NavLink>
               <NavLink className='links' to='/'>
                   <span>watchlist</span>
               </NavLink>
               <NavLink className='links' to='/'>
                   <span>resources</span>
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
    border-color: #888888;
    border-style: none solid none none;
    border-width: 2px;
    background-color: #baccba;
    display: flex;
    padding: 0 50px 0 40px;
    letter-spacing: 16;
    z-index: -1
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  position: relative;
  line-height: 2;
  padding-top: 20px;
  a {
    display: flex;
    text-decoration: none;
    transition: all 200ms ease-out;
    span {
      color: #222222;
      font-size: 14px;
      letter-spacing: 1.42px;
    }
    &:hover {
        transform: scaleX(1.15);
      }
  }
`

