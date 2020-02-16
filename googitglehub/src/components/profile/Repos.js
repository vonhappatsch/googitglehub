import React, { Component } from 'react';
import axios from 'axios';

class RepoList extends Component {
    state = {
        repositories: []
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/vonhappatsch/repos`)
            .then(res => {
                console.log(res);
                this.setState({ repositories: res.data });
            })
    }

    render() {
        return (
            <div>
                { this.state.repositories.map(repo => <p key={repo.id}>{repo.name}</p>)}
            </div>
        );
    }
}

export default RepoList;