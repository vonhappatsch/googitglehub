import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/navigation/Navbar.js';
import Home from './pages/home.js';
import Commit from './components/commits/Commit.js';
import About from './pages/about.js';

/* 
This is the layout component. It's displayed by the top-level Route
this.props.children will correspond to the current URL's component.

If the URL is only / then the IndexRoute's component will be the child (Search component)
If the URL is /user/:username then the User component will be displayed.
*/

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
          <Route path='/commit-list/:repo_name' component={Commit} />
          <Route path='/about' component={About} />
        </ThemeProvider>
      </Router>
    );
  }
};

export default App;