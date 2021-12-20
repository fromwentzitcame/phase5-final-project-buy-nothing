import React from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import styled from 'styled-components';


function Header({setLoggedIn, user}) {
    let navigate = useNavigate()

    function handleLogout() {
        console.log("logging out")
        fetch("/logout", { method: "DELETE" })
        .then((response) => {
          if (response.ok) {
            navigate('/login')
            setLoggedIn(null);
          }
        });
      }

    return (
        <Nav>
            <span>the buy nothing project</span>
            <Welcome>{user ? `HELLO, ${user.username.toUpperCase()}!` : null }</Welcome>
            { !user ? <Login onClick={() => {navigate('/login')}}>login</Login> : <Logout onClick={() => handleLogout()}>logout</Logout>}
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    border-style: none none solid none;
    border-width: 2px;
    background-color: #baccba;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    letter-spacing: 16;
    z-index: 3;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin-right: 25px;
  margin-left: auto;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`

const Login = styled.a`
  background-color: white;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    cursor: pointer;
    background: #febd97;
    color: #000;
    border-color: white;
  }
`;

const Logout = styled.a`
  background-color: white;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    cursor: pointer;
    background: #febd97;
    color: #000;
    border-color: white;
  }
`;

const Welcome = styled.span`
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 0px 10px;
    white-space: nowrap;
    position: relative;
`