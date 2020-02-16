import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyNavbarContent = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: rgb(219, 248, 248);
    color: rgb(31, 31, 31);
    box-shadow: 10px 6px black;
    font-family: 'Lato', sans-serif;
    font-weight: 400;

    height: 10vh;

    .logo {
        font-family: 'Old Standard TT', serif;
        font-size: 5vh;
        font-weight: bold;
        text-shadow: 2px 1px 3px rgb(31, 31, 31);
        background-color: rgb(219, 248, 248);

        @media screen and (max-width: 768px) {
            font-size: 3vh;
            padding: 0vh 0vw 0vh 5vw;
            width: 50vw;
        }
    }

    .nav-links {
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        width: 40vw;
        background-color: rgb(219, 248, 248);

        @media screen and (max-width: 768px) {
            width: 60vw;
        }
    }

    .link {
        color: rgb(31, 31, 31);
        background-color: rgb(219, 248, 248);
        font-size: 2.5vh;
        text-decoration: none;
        @media screen and (max-width: 768px) {
            font-size: 2vh;
        }
    }

    .link:hover {
        font-weight: bold;
        font-size: 3vh;
    }

    li {
        background-color: rgb(219, 248, 248);
    }
`

const NavbarContent = () => {
    return(
        <MyNavbarContent>
            <p className="logo">googitglehub</p>

            <ul className="nav-links">
                <li>
                    <Link to="/" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/another-user" className="link">Another user</Link>
                </li>
            </ul>
        </MyNavbarContent>
    );
}

export default NavbarContent;