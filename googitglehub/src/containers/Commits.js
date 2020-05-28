import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Commit from '../components/Commit';

const MyCommitList = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: space-between;
    width: 80vw;
    padding: 2vh 4vw 3vh 4vw;
    margin: 6vh 0vw 10vh 6vw;

    background-color: ${(props => (props.theme.white))};
    box-shadow: -8px 8px ${(props => (props.theme.black))};;

    .commit {
        padding: 2vh 0vw 4vh 0vw;
        background-color: ${(props => (props.theme.white))};
    }

    .date {
        font-size: 1.8vh;
    }

    .message {
        font-size: 3vh;
    }

    .author {
        font-size: 2.2vh;
        font-weight: 400;
    }

    .filter-input {
        padding: 5vh 1vw 2vh 1vw;

        border: none;
        border-bottom: 2px solid ${(props => (props.theme.aqua))};
        outline: none;
        background-color: ${(props => (props.theme.white))};
        color: ${(props => (props.theme.lilac))};

        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 2.2vh;
        text-shadow: 1px 1px 3px rgba(82,82,82,0.11);
    }

    .filter-input:focus {
        border-bottom: 2.5px solid rgb(219, 248, 248);
    }

    h3 {
        padding: 6vh 0vw 1vh 0vw;
        font-family: 'Old Standard TT', serif;
        font-size: 4vh;
        background-color: ${(props => (props.theme.white))};
        text-shadow: 2px 3px 3px rgba(82,82,82,0.08);
    }

    p {
        background-color: ${(props => (props.theme.white))};
        line-height: 3.5vh;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        text-shadow: 1px 2px 4px rgba(82,82,82,0.06);
    }
`

class Commits extends Component {
  state = {
    commits: [],
    search: ''
  }

  componentDidMount() {
    let id = this.props.match.params.repo_name;
    axios.get(`https://api.github.com/repos/vonhappatsch/${id}/commits?per_page=20`)
      .then(res => {
        this.setState({ commits: res.data });
      })
  }

  searchCommit = (e) => {
    this.setState({ search: e.target.value });
  }

  render() {
    let filterCommits = this.state.commits.filter(commit => commit.commit.message.toLowerCase().includes(this.state.search.toLowerCase()));

    const filteredCommits = () => {
      if (this.state.search === '') {
        return this.state.commits.map((commit, i) => (
          <Commit 
            key={i}
            date={commit.commit.author.date}
            message={commit.commit.message}
            author={commit.commit.author.name}
          />
        ));
      } else if (filterCommits) {
        return filterCommits.map((commit, i) => (
          <Commit 
            key={i}
            date={commit.commit.author.date}
            message={commit.commit.message}
            author={commit.commit.author.name}
          />
        ))
      }
    }

    return (
      <MyCommitList>
        <input type="search"
          className="filter-input"
          placeholder="Digite o conteúdo do -m que deseja buscar"
          onChange={this.searchCommit}
        />

        <h3>20 últimos commits:</h3>
        {
          filteredCommits()
        }
      </MyCommitList>
    );
  }
}


export default Commits;