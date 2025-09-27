import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";

function Home() {
  const [datax, setDatax] = useState(null);

  useEffect(() => {
    githubApi().then(data => setDatax(data));
  }, []);

  // Optional chaining দিয়ে console
  console.log("GitHub Login:", datax?.login);

  return (
    <div>
      {datax ? (
        <div>
          <h2>{datax.login}</h2>
          <img src={datax.avatar_url} alt="Avatar" width={100} />
          <p>{datax.bio}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Home;
