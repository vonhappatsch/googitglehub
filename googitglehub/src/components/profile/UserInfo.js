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

    background: ${(props => (props.theme.yellow))};
    box-shadow: -8px 8px black;

    padding: 5vh 0vw 5vh 0vh;
    @media screen and (max-width: 768px) {
        padding-top: 3vh;
    }

    margin-top: 6vh;

    .btn:hover {
        background-color: ${(props => (props.theme.aqua))};
        color: ${(props => (props.theme.black))};
    }
`

const MyButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 0.5em;
    border-radius: 3px;

    color: rgb(248, 251, 246);
    background-color: ${(props => (props.theme.lilac))};
    border: 2px solid ${(props => (props.theme.aqua))};
    outline: none;

    font-family: 'Old Standard TT', serif;
    font-size: 3vh;
    font-weight: 700;
    text-shadow: 0.5px 0.2px 0.3px rgb(31, 31, 31);
`;

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

                <MyButton onClick={this.handleSubmit} name="clicked" className="btn">check repos</MyButton>

                {
                    this.state.btnClicked === "clicked" && <RepoList />
                }
            </MyUserInfo>
        );
    }
}

export default UserInfo;