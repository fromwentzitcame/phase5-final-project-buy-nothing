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
            navigate('/')
            setLoggedIn(null);
          }
        });
      }

    return (
        <Nav>
            <NavLink className='links' to='/'>
                <span>the buy nothing project</span>
            </NavLink>
            <UserCenter>
                <Welcome>{user ? `hello, ${user.first_name.toLowerCase()}!` : null }</Welcome>
                {user? <IconPic src={user.profile_picture_url}></IconPic> : null}
                { !user ? <LogButton onClick={() => {navigate('/login')}}>login</LogButton> : <LogButton onClick={() => handleLogout()}>logout</LogButton>}
            </UserCenter>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    color: #222222;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    border-color: #888888;
    border-style: none none solid none;
    border-width: 2px;
    background-color: #baccba;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 25px;
    letter-spacing: 16;
    z-index: 3;
    a {
        color: #222222;
        text-decoration: none;
    }
`;

const UserCenter = styled.div`
    display: flex;
    align-items: center;
`

const LogButton = styled.a`
    color: #222222;
    background-color: white;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 6px;
    transition: all 0.2s ease 0s;
    &:hover {
        cursor: pointer;
        background: #DDDDDD;
        color: #000;
        border-color: white;
    }
`;

const Welcome = styled.span`
    color: #222222;
    font-size: 14px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 0px 10px;
    white-space: nowrap;
    position: relative;
`

const IconPic = styled.img`
    height: 30px;
    width: 30px;
    object-fit: cover;
    border-radius: 50px;
    margin-right: 15px;
    position: relative;
`