import React, { Component } from 'react';
import styled from 'styled-components';
import UserInfo from '../components/profile/UserInfo.js';

const MyAbout = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    width: 50w;

    background-color: rgb(251, 253, 253);
    box-shadow: -8px 8px black;

    padding: 5vh 0vw 5vh 0vh;
    @media screen and (max-width: 768px) {
        padding-top: 3vh;
    }

    margin-top: 6vh;

    p {
        padding: 0vh 0vw 2vh 0vw;
        flex-flow: row nowrap;
        line-height: 6vh;
        background-color: rgb(251, 253, 253);
    }
`

class AnotherUser extends Component {
    render() {
        return (
            <main>
                <MyAbout>
                    <p>Algum textinho explicando aqui</p>
                    <p>e então um searchbox pra poder procurar o user (que triggaria o userinfo)</p>
                    <p>e então o userinfo seguiria o mesmo caminho que no home e dele os repos e commits tambem</p>
                    <p>fetch de busca por um usuario que saia do input do searchbox</p>
                </MyAbout>

                <UserInfo />
            </main>
        );
    }
}

export default AnotherUser;