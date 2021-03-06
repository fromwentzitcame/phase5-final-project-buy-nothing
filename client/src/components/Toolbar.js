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
               <NavLink className='links' to='/createpost'>
                   <span>create post</span>
               </NavLink>
               <NavLink className='links' to='/neighbors'>
                   <span>neighbors</span>
               </NavLink>
               {/* <NavLink className='links' to='/profile'>
                   <span>profile</span>
               </NavLink> */}
               <NavLink className='links' to='/resources'>
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
    margin-top: 70px;
    border-color: #888888;
    border-style: none solid none none;
    border-width: 2px;
    background-color: #baccba;
    display: flex;
    padding: 0 30px 0 30px;
    letter-spacing: 16;
    z-index: 2
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  position: relative;
  line-height: 2;
  padding-top: 30px;
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

