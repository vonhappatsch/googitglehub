import React from 'react';
import styled from 'styled-components';
import Commits from '../containers/Commits';

const MyCommits = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    width: 50w;

    background-color: pink;
    box-shadow: -8px 8px black;

    padding: 5vh 0vw 5vh 0vh;
    @media screen and (max-width: 768px) {
        padding-top: 3vh;
    }

    margin-top: 6vh;

    p {
        padding: 0vh 4vw 2vh 4vw;
        text-align: center;
        line-height: 6vh;
        background-color: pink;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }
`

const CommitWrapper = () => {
  return (
    <MyCommits>
      <Commits />
    </MyCommits>
  );
};

export default CommitWrapper;