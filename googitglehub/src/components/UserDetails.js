import React from 'react';
import UserInfo from '../containers/UserInfo';

const UserDetails = (props) => {
  return (
    <div key={props.i} className="user-info-card">
      <figure>
        <img src={props.avatar_url} alt="avatar" className="user-avatar" />
        <figcaption className="user-login"><i>{props.login}</i></figcaption>
      </figure>
      <p className="user-bio">{props.bio}</p>
      <p className="user-following">
        <b>Followers</b>: {props.followers} || <b>Following</b>: {props.following}
      </p>
      <p className="user-repos"><b>Public repos</b>: {props.public_repos}</p>
      <UserInfo user={props.login} />
    </div>
  );
};

export default UserDetails;