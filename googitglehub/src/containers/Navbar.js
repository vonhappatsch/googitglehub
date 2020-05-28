import React from 'react';
import styled from 'styled-components';
import NavbarContent from '../components/NavbarContent';

const MyNavBar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`

const Navbar = () => {
    return(
        <MyNavBar>
            <NavbarContent
              title="googitglehub"
              firstLink="/"
              secondLink="/about"
              firstLinkTitle="Home"
              secondLinkTitle="About"
            />
        </MyNavBar>
    );
}

export default Navbar;