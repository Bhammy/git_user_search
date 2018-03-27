import React from 'react';
import './userBadge.css';
import RepoList from './repoList';

const UserBadge = (props) => {
  const { searchedUser } = props;
  let displayedComponent;
  if (searchedUser === '') {
    displayedComponent = 'No user found.';
  } else {
    displayedComponent = (
      <div>
        <section><img src={ searchedUser.avatar_url } alt="user_profile" /></section>
        <section>
          <h3>{ searchedUser.login }</h3>
          <hr />
          <p>Followers: { searchedUser.followers }</p>
          <p>Following: { searchedUser.following }</p>
        </section>
        <section>
          { searchedUser.repoData.map( (repo) => {
              return <RepoList repo={ repo } />;
            })
          }
        </section>
      </div>);
  }
  return (
    <div>
      { displayedComponent }
    </div>
  );
};

export default UserBadge;
