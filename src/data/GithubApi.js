// src/data/GithubApi.js
import githubData from "./github_username.json";

async function githubApi() {
  const apiurl = githubData.urlToken + githubData.username;

  try {
    const response = await fetch(apiurl);
    const data = await response.json();
    return data; // এখানে JSON ডেটা return হবে
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
}

export default githubApi;
