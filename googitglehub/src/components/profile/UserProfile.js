import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MyUserProfile = styled.section`
    display: flex;
    flex-flow: row nowrap;

    .user-info-card {
        background-color: ${(props => (props.theme.yellow))};
        padding: 0vh 1vw 2vh 1vw;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
    }

    figure {
        background: ${(props => (props.theme.yellow))};
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .user-avatar {
        width: 40%;
        height: auto;
        box-shadow: 5px -5px ${(props => (props.theme.black))};
    }

    .user-login {
        background: ${(props => (props.theme.yellow))};
        font-size: 2.8vh;
        font-family: 'Old Standard TT', serif;
        font-weight: 400i;
        text-shadow: 2px 3px 5px rgba(82,82,82,0.21);
        line-height: 6vh;
    }

    .user-following, .user-repos, .user-bio {
        background: ${(props => (props.theme.yellow))};
        text-shadow: 2px 3px 5px rgba(82,82,82,0.18);
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 2.4vh;
        line-height: 3.5vh;
    }

    .user-bio {
        word-wrap: break-word;
    }

    b, i {
        background: ${(props => (props.theme.yellow))};
    }

    @media screen and (min-width: 768px) {
        .user-avatar {
            width: 20vh;
            height: auto;
        }
    
        .user-login {
            font-size: 3.2vh;
        }
    
        .user-bio {
            font-size: 2.6vh;
            line-height: 4vh;
        }

        .user-following, .user-repos {
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
                    informationArr.map((info, i) => (
                        <div key={i} className="user-info-card">
                            <figure>
                                <img src={info.avatar_url} alt="avatar" className="user-avatar" />
                                <figcaption className="user-login"><i>{info.login}</i></figcaption>
                            </figure>
                            <p className="user-bio">{info.bio}</p>
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