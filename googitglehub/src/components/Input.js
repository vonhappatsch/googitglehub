import React from 'react';
import styled from 'styled-components';

const MyInput = styled.input`
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

const Input = (props) => {
  return (
    <MyInput>
      <input type="search"
        className="filter-input"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />  
    </MyInput>
  );
};

export default Input;