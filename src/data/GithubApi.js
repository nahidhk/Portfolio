
function githubApi() {
  const githuburl = "https://api.github.com/users/nahidhk";
  return fetch(githuburl)
    .then(response => response.json())
    .catch(error => console.error("Error fetching GitHub data:", error));
}

export default githubApi; 
