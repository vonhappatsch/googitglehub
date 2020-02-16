import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
    state = {
        information: []
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/vonhappatsch`)
            .then(res => {
                this.setState({ information: res.data });
            })
    }

    
    render() {
        const informationArr = [];
        informationArr.push(this.state.information);
        return (
            <div>
                { informationArr.map(info => (
                    <div key={info.id}>
                        <p>{info.login}</p>
                        <img src={info.avatar_url} alt="avatar" />
                        <p>Followers: {info.followers} || Following: {info.following}</p>
                        <p>Public repos: {info.public_repos}</p>
                        <p>Fazer um click aqui pra triggar os repos? Fazer eles aparecerem?</p>
                    </div>
                ))}
            </div>
        )
    }       
}


export default UserProfile;