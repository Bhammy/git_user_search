import React from 'react';
import requestUserData from '../actions/actions';
import './search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleChange(e) {
    this.setState({ search: e.currentTarget.value });
  }

  async searchUser(e) {
    e.preventDefault();
    let searchedUser = await requestUserData(this.state.search);

    // if no user found, set searchedUser to default 'no user'
		searchedUser = (searchedUser === false) ? '' : searchedUser;
    this.props.setUser(searchedUser);
  }

  render() {
    return (
      <div className="search_container">
        <form onSubmit={ (e) => this.searchUser(e) }
          className="search_container_form"
        >
          <input onChange={ e => this.handleChange(e) } />
        </form>
      </div>
    );
  }
}

export default Search;
