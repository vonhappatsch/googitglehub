import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './containers/Navbar';
import Home from './pages/home';
import Commits from './containers/Commits';
import About from './pages/about';

const theme = {
  white: '#FCFDFB',
  black: '#071108',
  aqua: '#A5EFDE',
  yellow: '#FCE771',
  lilac: '#AB6FD6'
}

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/commit-list/:repo_name' component={Commits} />
          <Route path='/about' component={About} />
        </ThemeProvider>
      </Router>
    );
  }
};

export default App;