import React from 'react';
import styled from 'styled-components';

const MyAbout = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    padding: 4vh 4vw 4vh 4vw;
    margin: 6vh 0vw 10vh 6vw;

    background: ${(props => (props.theme.lilac))};
    box-shadow: -8px 8px ${(props => (props.theme.black))};

    h3 {
        padding: 6vh 0vw 1vh 0vw;
        font-family: 'Old Standard TT', serif;
        font-size: 4vh;
        background: ${(props => (props.theme.lilac))};
        text-shadow: 2px 3px 3px rgba(82,82,82,0.08);
    }

    p, a {
        background: ${(props => (props.theme.lilac))};
        line-height: 4vh;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        text-shadow: 1px 2px 4px rgba(82,82,82,0.06);
        text-decoration: none;
    }

    figure {
        padding: 6vh 0vw 3vh 0vw;
        background: ${(props => (props.theme.lilac))};
    }

    img {
        box-shadow: 5px -5px ${(props => (props.theme.black))};
    }
`

const About = () => {
    return(
        <MyAbout>
            <h3>que que isso aqui? </h3>
            <p>Isso aqui é mais como um exercício para treinar React, baseado no desafio encontrado <a href="https://github.com/Gympass/front-end-coding-test">aqui</a>.</p>
            <p>A ideia é seguir treinando com os desafios que ficam em listas repositórios abertos e esse é um dos primeiros da "série".</p>
            <figure>
                <img src="https://i.imgur.com/IkdLIvu.gif" alt="um gif do pusheen no git" />
            </figure>
        </MyAbout>
    );
}


export default About;