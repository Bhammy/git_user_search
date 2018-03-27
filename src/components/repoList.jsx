import React from 'react';
import './repoList.css';

const RepoList = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    git_url,
    stargazers_count,
    forks_count,
    open_issues_count,
    size,
  } = repo;

// card display
  return(
    <div className="repo_card" >
      <div className="repo_card_header">
        <a href={html_url}>
          <h3>{ name }</h3>
        </a>
      </div>
      <br />
      <div className="repo_card_header_details">
        <p>{ description }</p>
        <a href={git_url}>Git URL</a>
      </div>
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
