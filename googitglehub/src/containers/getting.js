import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyUsers = styled.section`
    display: flex;
    flex-flow: row nowrap;

    .user-info-card {
        background-color: ${(props => (props.theme.yellow))};
        padding: 0vh 5vw 2vh 5vw;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
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
    }
`

export default function GetUsers() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('vonhappatsch');

  const user = 'vonhappatsch'
  const token = '339ababe497082abfc14aaf53881d225c2105bf8';
  const endpoint = 'https://api.github.com';

  const creds = `${user}:${token}`;
  const auth = btoa(creds);

  const options = {
    mode: 'cors',
    headers: {
      'Authorization': 'Basic ' + auth,
    }
  }


    useEffect(() => {
      if (username !== '') {
        let searching = `${endpoint}/search/users?q=${username}`;
        fetch(searching, options)
          .then(res => res.json())
          .then(data => setUsers(data.items))
          .catch(err => {
            console.log(`There was the following error when fetching the API: ${err}`);
          });
        console.log(searching);
      }
  }, [username])

  const handleChange = e => {
    setUsername(e.target.value)
  }

  return (
    <MyUsers>
      <span>
        <input
          type="text"
          value={username}
          placeholder="GitHub username"
          required
          onChange={e => handleChange(e)}
        />
      </span>
      {
        (username === '') ?
        <h3>Insira um nome!</h3>
        :
        users.map((info, i) => (
            <div key={i} className="user-info-card">
              <figure>
                <img src={info.avatar_url} alt="avatar" className="user-avatar" />
                <figcaption className="user-login"><i>{info.login}</i></figcaption>
              </figure>
              <p><Link to={'/profile/' + info.login}>veja o perfil</Link></p>
            </div>
          ))
      }
    </MyUsers>
  );
};