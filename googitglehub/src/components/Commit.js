import React from 'react';

export default function Commit(props) {
  return (
    <div key={props.i}>
      <div className="commit">
        <p className="date">{props.date}</p>
        <p className="message">{props.message}</p>
        <p className="author">{props.author}</p>
      </div>
    </div>
  );
};