const requestUserData = async (username) => {
  // generic headers
  const headers = {
    'User-Agent': 'git_user_search',
  };

  // get user data first, then JSONify
  const userData = await fetch(`https://api.github.com/users/${username}`, {
    headers,
    method: 'GET',
  });

  // catch affirmative bad response
  if (!userData.ok) {
    return false;
  }

  const payload = await userData.json();

  // get repo data, JSONIFY & attach to user payload
  const repoData = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers,
    method: 'GET',
  });
  payload.repoData = await repoData.json();

  return payload;
};

export default requestUserData;
