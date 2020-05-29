import React, { Component } from 'react';
import styled from 'styled-components';
import RepoList from './RepoList.js';
import Button from '../components/Button';

const MyUserInfo = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 90w;

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

  handleRepos = (e) => {
    this.setState({ btnClicked: e.target.name });
  }

  render() {
    return (
      <MyUserInfo>
        <Button
          onClick={this.handleRepos}
          name="clicked"
          className="btn"
        >
          check repos
                </Button>

        {
          this.state.btnClicked === "clicked" && <RepoList user={this.props.user} />
        }
      </MyUserInfo>
    );
  }
};

export default UserInfo;