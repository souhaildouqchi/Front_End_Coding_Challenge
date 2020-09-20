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
    window.addEventListener("scroll", this.LoadMore); // load more repos
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
  loadRepo = () => {
    const { page } = this.state;

    this.setState((prevState) => ({
      page: prevState.page + page,
      loading: true,
    }));
    this.getRepo();
  };

  LoadMore = () => {
    const { loading } = this.state;

    if (
      window.pageYOffset + window.innerHeight >= window.innerHeight &&
      !loading
    ) {
      this.loadRepo();
    }
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
