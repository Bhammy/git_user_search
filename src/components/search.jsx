import React from 'react';
import requestUserData from '../actions/actions';

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
    searchedUser = (searchedUser === false) ? '' : searchedUser;
    this.props.setUser(searchedUser);
  }

  render() {
    return (
      <div>
        <form onSubmit={ (e) => this.searchUser(e) }>
          <input onChange={ e => this.handleChange(e) } />
        </form>
      </div>
    );
  }
}

export default Search;
