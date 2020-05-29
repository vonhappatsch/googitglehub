import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserCard from '../components/UserCard';

const MyUsers = styled.section`
    display: flex;
    flex-direction: column;
    padding: 3vh 0 0 0;

    h3 {
      text-align: center;
      margin: 1vh;
    }

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

  useEffect(() => {
    if (username !== '') {
      let searching = `https://api.github.com/search/users?q=${username}`;
      fetch(searching)
        .then(res => res.json())
        .then(data => setUsers(data.items))
        .catch(err => {
          console.log(`There was the following error when fetching the API: ${err}`);
        });
    }
  }, [username])

  const handleChange = e => {
    setUsername(e.target.value)
  }

  return (
    <MyUsers>
      <h3>Procure usuários no GH, visualize o perfil, repositórios e 20 últimos commits de cada, podendo buscar por -m :)</h3>
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