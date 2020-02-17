import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MyCommitList = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: space-between;
    width: 80vw;
    padding: 2vh 4vw 1vh 4vw;
    margin: 6vh 0vw 10vh 6vw;

    background-color: rgb(253, 253, 253);
    box-shadow: -8px 8px black;

    .commit {
        padding: 2vh 0vw 2vh 0vw;
        background-color: rgb(253, 253, 253);
    }

    p {
        background-color: rgb(253, 253, 253);
        line-height: 4vh;
        font-size: 2.5vh;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        // text-align: left;
    }
`

class Commit extends Component {
    state = {
        commits: []
    }

    componentDidMount() {
        let id = this.props.match.params.repo_name;
        axios.get(`https://api.github.com/repos/vonhappatsch/${id}/commits`)
            .then(res => {
                this.setState({ commits: res.data });
            })
    }



    render() {
        return (
            <MyCommitList>

                {
                    this.state.commits.map(commit => (
                        <div key={commit.node_id} className="commit">
                            <p>{commit.commit.author.date}</p>
                            <p>{commit.commit.message}</p>
                            <p>{commit.commit.author.name}</p>
                        </div>
                    ))
                }

            </MyCommitList>
        );
    }
}


export default Commit;