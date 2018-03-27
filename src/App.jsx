import React from 'react';
import Search from './components/search';
import UserBadge from './components/userBadge';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.setUser = this.setUser.bind(this);
    this.state = { searchedUser: '' };
  }

  setUser(user) {
    this.setState({ searchedUser: user });
  }

  render() {
    return (
      <div>
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
