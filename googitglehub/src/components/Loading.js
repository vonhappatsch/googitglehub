import React from 'react';
import styled from 'styled-components';

const MyLoading = styled.section`
    display: flex;
    flex-flow: row nowrap;

    .loading {
        background-color: ${(props => (props.theme.yellow))};
        padding: 0vh 5vw 2vh 5vw;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

    h3 {
        background: ${(props => (props.theme.yellow))};
        text-align: center;
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
        .h3 {
            font-size: 2.6vh;
            line-height: 5vh;
        }
    }
`

const Loading = () => {
    return(
      <MyLoading>
        <div className="loading">
          <h3>Carregando...</h3>
        </div>  
      </MyLoading>
    );
};

export default Loading;