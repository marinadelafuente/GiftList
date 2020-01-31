import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import Profile from './Profile';
import { Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Profile />
            <button className="add-friend__button">Add New Friend + </button>
          </Route>
          {/* <Route path="/profile" component={Profile} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
