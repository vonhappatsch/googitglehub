import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyNavbarContent = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background: ${(props => (props.theme.aqua))};
    color: ${(props => (props.theme.black))};
    box-shadow: 10px 6px black;
    font-family: 'Lato', sans-serif;
    font-weight: 400;

    height: 10vh;

    .logo {
        font-family: 'Old Standard TT', serif;
        font-size: 5vh;
        font-weight: bold;
        text-shadow: 2px 3px 5px rgba(82,82,82,0.41);

        background: ${(props => (props.theme.aqua))};

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
        background: ${(props => (props.theme.aqua))};

        @media screen and (max-width: 768px) {
            width: 60vw;
        }
    }

    .link {
        color: rgb(31, 31, 31);
        background: ${(props => (props.theme.aqua))};
        font-size: 2.5vh;
        text-decoration: none;
        text-shadow: 2px 3px 5px rgba(82,82,82,0.12);

        @media screen and (max-width: 768px) {
            font-size: 2vh;
        }
    }

    .link:hover {
        font-weight: bold;
        font-size: 3vh;
    }

    li {
        background: ${(props => (props.theme.aqua))};
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
                    <Link to="/about" className="link">About</Link>
                </li>
            </ul>
        </MyNavbarContent>
    );
}

export default NavbarContent;