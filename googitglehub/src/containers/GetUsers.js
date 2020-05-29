import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserCard from '../components/UserCard';

const MyUsers = styled.section`
    display: flex;
    flex-direction: column;
    padding: 3vh 0 0 0;

    .filter-input {
      padding: 5vh 1vw 2vh 1vw;

      border: none;
      border-bottom: 2px solid ${(props => (props.theme.aqua))};
      outline: none;
      background-color: ${(props => (props.theme.white))};
      color: ${(props => (props.theme.lilac))};

      font-family: 'Lato', sans-serif;
      font-weight: 300;
      font-size: 2.2vh;
      text-shadow: 1px 1px 3px rgba(82,82,82,0.11);
  }

  .filter-input:focus {
      border-bottom: 2.5px solid rgb(219, 248, 248);
  }
`

export default function GetUsers() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('vonhappatsch');

  const user = 'vonhappatsch'
  const token = 'b2aac9468c05f55ec1513122605b54577b6bc89b';
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
      <input
        type="search"
        className="filter-input"
        value={username}
        placeholder="Insira o nome do perfil no GitHub que deseja encontrar"
        required
        onChange={e => handleChange(e)}
      />
      {
        (username === '') ?
          <h3>Insira um nome!</h3>
          :
          users.map((info, i) => (
            <UserCard
              key={i}
              avatar={info.avatar_url}
              user={info.login}
            />
          ))
      }
    </MyUsers>
  );
};