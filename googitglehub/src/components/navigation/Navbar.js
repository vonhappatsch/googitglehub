import React from 'react';
import styled from 'styled-components';
import NavbarContent from './NavbarContent.js';

const MyNavBar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`
const Navbar = () => {
    return(
        <MyNavBar>
            <NavbarContent />
        </MyNavBar>
    );
}

export default Navbar;