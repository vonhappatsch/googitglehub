import React, { Component } from 'react';
import styled from 'styled-components';
import Repo from '../components/Repo';
import Loading from '../components/Loading';

const MyRepoList = styled.section`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 0vh 0vw 2vh 0vw;

    background: ${(props => (props.theme.yellow))};

    .repo-link {
        width: 60vw;
        height: auto;
        padding: 5vh 5vw 5vh 5vw;
        margin: 1vh 0vw 2vh 0vw;
        box-shadow: 4px 4px black;
        border-radius: 2px;

        background: ${(props => (props.theme.white))};

        font-family: 'Old Standard TT', serif;
        font-weight: bold;
        text-decoration: none;
        word-wrap: break-word;
    }

    @media screen and (min-width: 768px) {
        .repo-link {
            width: 50vw;
        }
    }

    .repo-description {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 2.4vh;
        line-height: 4vh;
        background: ${(props => (props.theme.white))};
    }
`

class RepoList extends Component {
  state = {
    repositories: [],
    isLoading: true
  }

  user = 'vonhappatsch'
  token = '339ababe497082abfc14aaf53881d225c2105bf8';
  endpoint = 'https://api.github.com';

  creds = `${this.user}:${this.token}`;
  auth = btoa(this.creds);

  options = {
    mode: 'cors',
    headers: {
      'Authorization': 'Basic ' + this.auth,
    }
  }

  async componentDidMount() {
    await fetch(`https://api.github.com/users/${this.props.user}/repos`, this.options)
      .then(res => res.json())
      .then(data => this.setState({ repositories: data }))
      .then(this.setState({ isLoading: false }))
      .catch(err => {
        console.log(`There was the following error when fetching the API: ${err}`);
      });
  }

  render() {
    return (
      <MyRepoList>
        {
          this.state.isLoading 
          ? <Loading />
          : this.state.repositories.map(repo =>
            <Repo 
              key={repo.id}
              name={repo.name}
              description={repo.description}
              user={this.props.user}
            />
          )
        }
      </MyRepoList>
    );
  }
};

export default RepoList;