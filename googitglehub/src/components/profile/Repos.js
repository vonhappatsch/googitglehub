import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyRepoList = styled.section`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 0vh 0vw 2vh 0vw;

    background-color: rgb(253, 253, 253);

    .repo-link {
        background-color: rgb(253, 253, 253);
        padding: 2vh 1vw 1vh 1vw;
    }
`

class RepoList extends Component {
    state = {
        repositories: []
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/vonhappatsch/repos`)
            .then(res => {
                this.setState({ repositories: res.data });
            })
    }

    render() {
        return (
            <MyRepoList>
                {
                    this.state.repositories.map(repo => <Link to={'/commit-list/' + repo.name} key={repo.id} className="repo-link">{repo.name}</Link>)
                }
            </MyRepoList>
        );
    }
}

export default RepoList;