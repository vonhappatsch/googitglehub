import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MyRepoList = styled.section`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    background-color: rgb(253, 253, 253);

    p {
        padding: 1vh 1vw 1vh 1vw;
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
                    this.state.repositories.map(repo => <p key={repo.id}>{repo.name}</p>)
                }
            </MyRepoList>
        );
    }
}

export default RepoList;