import React, { Component } from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile.js';
import RepoList from './Repos.js';

const MyUserInfo = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    width: 50w;

    background-color: rgb(253, 253, 253);
    box-shadow: -8px 8px black;

    padding: 5vh 0vw 5vh 0vh;
    @media screen and (max-width: 768px) {
        padding-top: 3vh;
    }

    margin-top: 6vh;

    p {
        padding: 0vh 4vw 2vh 4vw;
        text-align: center;
        line-height: 6vh;
        background-color: rgb(253, 253, 253);
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }
`

class UserInfo extends Component {
    render() {
        return (
            <MyUserInfo>
                <UserProfile />

                <RepoList />
            </MyUserInfo>
        );
    }
}

export default UserInfo;