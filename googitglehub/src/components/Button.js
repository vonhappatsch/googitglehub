import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 0.5em;
    border-radius: 3px;

    color: rgb(248, 251, 246);
    background-color: ${(props => (props.theme.lilac))};
    border: 2px solid ${(props => (props.theme.aqua))};
    outline: none;

    font-family: 'Old Standard TT', serif;
    font-size: 3vh;
    font-weight: 700;
    text-shadow: 0.5px 0.2px 0.3px rgb(31, 31, 31);
`;

const Button = (props) => {
  return (
      <MyButton
        onClick={props.onClick}
        name={props.name}
        className="btn"
      >
        {props.children}
      </MyButton>
  );
};

export default Button;