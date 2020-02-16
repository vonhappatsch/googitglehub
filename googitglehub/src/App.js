import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navigation/Navbar.js';
import Home from './pages/home.js';

/* 
This is the layout component. It's displayed by the top-level Route
this.props.children will correspond to the current URL's component.

If the URL is only / then the IndexRoute's component will be the child (Search component)
If the URL is /user/:username then the User component will be displayed.
*/

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </header>
        <main>
            <Home />
        </main>
      </div>
    );
  }
};

export default App;