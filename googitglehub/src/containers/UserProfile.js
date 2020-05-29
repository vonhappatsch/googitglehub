import React, { Component } from 'react';
import styled from 'styled-components';
import Loading from '../components/Loading';
import UserDetails from '../components/UserDetails';

const MyUserProfile = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    .user-info-card {
        background-color: ${(props => (props.theme.yellow))};
        padding: 0vh 5vw 2vh 5vw;
        margin-top: 8vh;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 80vw;
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
        text-align: center;
        line-height: 4vh;
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
            line-height: 5vh;
        }

        .user-following, .user-repos {
            font-size: 2.3vh;
        }
    }
`

class UserProfile extends Component {
  state = {
    informations: [],
    isLoading: true
  }

  async componentDidMount() {
    const user = this.props.match.params.user;
    await fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(data => this.setState({ informations: data }))
      .then(this.setState({ isLoading: false }))
      .catch(err => {
        console.log(`There was the following error when fetching the API: ${err}`);
      });
  }

  render() {
    const informationArr = [];
    informationArr.push(this.state.informations);
    return (
      <MyUserProfile>
        {
          this.state.isLoading
            ? <Loading />
            : informationArr.map((info, i) => (
              <UserDetails 
                key={info.i}
                avatar_url={info.avatar_url}
                login={info.login}
                bio={info.bio}
                followers={info.followers}
                following={info.following}
                public_repos={info.public_repos}
                user={info.login}
              />
            ))
        }
      </MyUserProfile>
    );
  }
};


export default UserProfile;