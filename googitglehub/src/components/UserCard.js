import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.section`
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

const UserCard = (props) => {
  return (
    <Card>
      <div key={props.i} className="user-info-card">
        <figure>
          <img src={props.avatar} alt="avatar" className="user-avatar" />
          <figcaption className="user-login"><i>{props.user}</i></figcaption>
        </figure>
        <p><Link to={'/profile/' + props.user}>veja o perfil</Link></p>
      </div>  
    </Card>
  );
};

export default UserCard;