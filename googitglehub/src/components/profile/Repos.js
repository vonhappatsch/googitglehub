import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyRepoList = styled.section`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 0vh 0vw 2vh 0vw;

    background: ${(props => (props.theme.yellow))};

    .repo-link {
        width: 40vw;
        height: auto;
        padding: 5vh 2vw 5vh 2vw;
        margin: 1vh 0vw 2vh 0vw;
        box-shadow: 4px 4px black;
        border-radius: 2px;

        background-color: rgb(253, 253, 253);

        font-family: 'Old Standard TT', serif;
        font-weight: bold;
        text-decoration: none;
        word-wrap: break-word;
    }

    .repo-description {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 2.4vh;
        line-height: 4vh;
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

    // fazer botoes com essas funções:

    // order by stars

    // order by date

    // order by name

    render() {
        return (
            <MyRepoList>
                {
                    this.state.repositories.map(repo => <Link to={'/commit-list/' + repo.name} key={repo.id} className="repo-link">{repo.name}<p className="repo-description">{repo.description}</p></Link>)
                }
            </MyRepoList>
        );
    }
}

export default RepoList;