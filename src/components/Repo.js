import React from "react";

export default function Repo({
  // names from github API
  avatar_url,
  name,
  html_url,
  owner,
  description,
  stargazers_count,
  open_issues_count,
  created_at,
}) {
  return (
    <div className="container">
      <div class="card blue-grey lighten-5">
        <div className="row">
          <div class="col s2">
            <a
              href={` https://github.com/${owner} `}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar_url} alt="" width="200" />{" "}
            </a>
          </div>
          <div class="col s10 ">
            <h2 class="indigo-text text-darken-4 left-align">
              <a href={html_url}>{name}</a>
            </h2>
          </div>
          <div class="col s10">
            <p class="left-align">{description}</p>
          </div>
          <div class="col s2">
            <span className="badge white-text blue new">
              <i class="material-icons left">star</i>
              {stargazers_count}
            </span>
          </div>
          <div class="col s2">
            <span className="badge white-text blue new ">
              <i class="material-icons left">warning</i>
              {open_issues_count}
            </span>
          </div>
          <div class="col s6">
            <span className="badge white-text blue new">
              <i class="material-icons left">date_range</i>
              {created_at}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
