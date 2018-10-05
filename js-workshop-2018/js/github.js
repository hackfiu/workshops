const githubUrl = "https://api.github.com";

const getGitHubRepos = async username => {
  const response = await axios.get(`${githubUrl}/users/${username}/repos`);
  
  return response;
};





