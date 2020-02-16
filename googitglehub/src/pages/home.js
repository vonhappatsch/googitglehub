import React, { Component } from 'react';
import styled from 'styled-components';
import UserInfo from '../components/profile/UserInfo.js'

const MyAbout = styled.section`
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

class Home extends Component {
    render() {
        return (
            <main>
                <MyAbout>
                    <p>Algum textinho explicando aqui</p>
                    <p>E então embaixo vai vir o componente de user, que clicando iria trigger o componente de repos</p>
                    <p>clicando em cada repo, iria trigger a pagina de commits com a lista de commits daquele repo e o searchbar de commits</p>
                </MyAbout>

                <UserInfo />
            </main>
        );
    }
}

export default Home;