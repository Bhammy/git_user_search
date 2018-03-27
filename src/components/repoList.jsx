import React from 'react';

const RepoList = ({ repo }) => {
  const {
    name,
    description,
    git_url,
    stargazers_count,
    forks_count,
    open_issues_count,
    size
  } = repo;

  return(
    <div className="repo_card">
      <h3>{ name }</h3>
      <hr />
      <p>{ description }</p>
      <a href={git_url}>Repo Link</a>
      <div>
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
