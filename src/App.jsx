import React from 'react';
import Search from './components/search';
import UserBadge from './components/userBadge';
import './App.css';

class App extends React.Component {
// keep state at top level
  constructor(props) {
    super(props);
    this.setUser = this.setUser.bind(this);
    this.state = { searchedUser: '' };
  }

// use this as a callback for Search Component
  setUser(user) {
    this.setState({ searchedUser: user });
  }

  render() {
    return (
      <div className="app_container">
        <header className="app-header">
          <h1>Git User Search</h1>
        </header>
        <Search setUser={ this.setUser }/>
        <UserBadge searchedUser={ this.state.searchedUser } />
      </div>
    );
  }
}

export default App;
