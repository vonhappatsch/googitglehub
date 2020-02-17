import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MyUserProfile = styled.section`
    display: flex;
    flex-flow: row nowrap;

    .user-info-card {
        background-color: rgb(253, 253, 253);
        padding: 0vh 1vw 2vh 1vw;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
    }

    figure {
        background-color: rgb(253, 253, 253);
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .user-avatar {
        width: 40%;
        height: auto;
    }

    .user-login {
        background-color: rgb(253, 253, 253);
        font-size: 2.8vh;
        font-family: 'Old Standard TT', serif;
        font-weight: 400i;
        line-height: 6vh;
    }

    p {
        font-size: 2.4vh;
        line-height: 3.5vh;
    }

    b, i {
        background-color: rgb(253, 253, 253);
    }

    @media screen and (min-width: 768px) {
        .user-avatar {
            width: 20vh;
            height: auto;
        }
    
        .user-login {
            font-size: 3.2vh;
        }
    
        p {
            font-size: 2.3vh;
        }
    }
`

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
            <MyUserProfile>
                { 
                    informationArr.map(info => (
                        <div key={info.login} className="user-info-card">
                            <figure>
                                <img src={info.avatar_url} alt="avatar" className="user-avatar" />
                                <figcaption className="user-login"><i>{info.login}</i></figcaption>
                            </figure>
                            <p className="user-following"><b>Followers</b>: {info.followers} || <b>Following</b>: {info.following}</p>
                            <p className="user-repos"><b>Public repos</b>: {info.public_repos}</p>
                        </div>
                    ))
                }
            </MyUserProfile>
        )
    }       
}


export default UserProfile;