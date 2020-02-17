import React, { Component } from 'react';
import UserInfo from '../components/profile/UserInfo.js';

class Home extends Component {
    render() {
        return (
            <main>
                <UserInfo />
            </main>
        );
    }
}

export default Home;