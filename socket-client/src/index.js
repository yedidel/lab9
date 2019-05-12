import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Chat from './chat';
import Welcome from './welcome';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Glyphicon } from 'react-bootstrap';

import * as serviceWorker from './serviceWorker';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message:''
    };

 
  
  }

   updateMessage(e) {
      this.setState({message: e.target.value});
   }

  render() {
    return (
   // <Chat></Chat>
      <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Welcome} />
              <Route exact path='/chat/:name' component={Chat} />
          </Switch>
          </div>
      </Router>
    
    );


  }


  
}

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
