import React from "react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github-logo.png";
import "./socialAccounts.css";
const SocialAccounts = () => {
  return (
    <div className="social-accounts-container">
      <a
        href="https://www.linkedin.com/in/kaankureli/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="linkedin-logo"
          width={30}
          height={30}
          src={linkedin}
          alt="linkedin"
        />
      </a>
      <a
        href="https://github.com/kkureli/rick-and-morty-multiple-select"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width={30}
          height={30}
          src={github}
          alt="github"
          className="github-logo"
        />
      </a>
    </div>
  );
};

export default SocialAccounts;
