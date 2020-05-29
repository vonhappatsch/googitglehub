import React from 'react';
import { Link } from 'react-router-dom';

const Repo = (props) => {
  return (
    <Link to={`/commit-list/${props.user}/${props.name}`}
      key={props.id} className="repo-link">
      {props.name}<p className="repo-description">{props.description}</p>
    </Link>
  );
};

export default Repo;