import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserCard from '../components/UserCard';

const MyUsers = styled.section`
    display: flex;
    flex-flow: row nowrap;
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