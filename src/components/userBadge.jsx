import React from 'react';
import './userBadge.css';
import RepoList from './repoList';

const UserBadge = (props) => {
  const { searchedUser } = props;
  let displayedComponent;
  if (searchedUser === '') {
// default display
    displayedComponent = <p className="user">No user found.</p>
  } else {
// when state has user
    displayedComponent = (
      <div>
        <section className="user">
          <section className="user_details_photo">
            <img src={ searchedUser.avatar_url } alt="user_profile"               />
          </section>
          <section className="user_details">
            <h3>{ searchedUser.login }</h3>
            <hr />
            <p>Followers: { searchedUser.followers }</p>
            <p>Following: { searchedUser.following }</p>
          </section>
        </section>
        <section className="repo_cards">
          { searchedUser.repoData.map( (repo) => {
              return <RepoList repo={ repo } key={ repo.id }/>;
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
