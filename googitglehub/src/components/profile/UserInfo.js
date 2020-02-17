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
        background-color: rgb(253, 253, 253);
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }

    .btn {
        width: 10vw;
    }
`

class UserInfo extends Component {
    state = {
        btnClicked: ''
    }

    handleSubmit = (e) => {
        this.setState({ btnClicked: e.target.name });
    }

    render() {
        return (
            <MyUserInfo>
                <UserProfile />

                <button onClick={this.handleSubmit} name="clicked" className="btn">check repos</button>

                {
                    this.state.btnClicked === "clicked" && <RepoList />
                }
            </MyUserInfo>
        );
    }
}

export default UserInfo;