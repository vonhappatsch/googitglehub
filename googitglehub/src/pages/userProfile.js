import React, { Component } from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile.js';
import RepoList from './Repos.js';
import Button from '../components/Button';

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
                <Button 
                    onClick={this.handleSubmit} 
                    name="clicked" 
                    className="btn"
                >
                        check repos
                </Button>

                {
                    this.state.btnClicked === "clicked" && <RepoList />
                }
            </MyUserInfo>
        );
    }
}

export default UserInfo;