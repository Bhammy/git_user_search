import React from 'react';
import './repoList.css';

const RepoList = ({ repo }) => {
  const {
    name,
    description,
    git_url,
    stargazers_count,
    forks_count,
    open_issues_count,
    size,
  } = repo;

  return(
    <div className="repo_card" >
      <div className="repo_card_header">
        <h3>{ name }</h3>
      </div>
      <br />
      <p>{ description }</p>
      <a href={git_url}>Repo Link</a>
      <div className="repo_card_details">
        <section>
          <p>Stars: { stargazers_count }</p>
          <p>Forks: { forks_count }</p>
        </section>
        <section>
          <p>Open Issues: { open_issues_count }</p>
          <p>Size: { size }kb</p>
        </section>
      </div>
    </div>
  )
};

export default RepoList;
