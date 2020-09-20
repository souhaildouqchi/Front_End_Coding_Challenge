import React, { Component } from "react";
import ListRepo from "./ListRepo";
import axios from "axios";
import moment from "moment";
class FetchRepos extends Component {
  state = {
    repo: [],
    error: "",
    page: 1,
    loading: true,
  };

  componentDidMount() {
    this.getRepo(); // get initial repos
  }

  getRepo = () => {
    const DATE_30_DAYS_BEFORE = moment()
      .subtract(30, "days")
      .format("YYYY-MM-DD");
    let url = `https://api.github.com/search/repositories?q=created:>${DATE_30_DAYS_BEFORE}&sort=stars&order=desc&page=${this.state.page}`;
    axios
      .get(url)
      .then((resp) => {
        this.setState({
          repo: [...this.state.repo, ...resp.data.items], // to update the repo instantly
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          loading: false,
        });
      });
  };

  render() {
    return (
      <div>
        <ListRepo repo={this.state.repo} />
      </div>
    );
  }
}

export default FetchRepos;
