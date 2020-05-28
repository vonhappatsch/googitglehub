import React from 'react';

const Commit = (props) => {
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

export default Commit;