import React, { Component } from "react";
import Searchresult from "./SearchResult";
// import axios from "axios";

export default class Searchstudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Neymar",
      searchResult: [],
    };

    this.search = this.search.bind(this);
  }

  // componentDidMount() {

  // }

  // componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  // componentWillUnmount() {

  // }

  // Prototype methods, Bind in Constructor (ES2015)
  search(e) {
    console.log("aaaaa");
    e.preventDefault();
    // creates entity
    fetch("http://localhost:8084/student", {
      method: "POST",
      //   mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        name: this.state.name,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
        this.setState((prevState) => ({
          name: prevState.name,
          searchResult: response,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(changeObject) {
    this.setState(changeObject);
  }

  // Class Properties (Stage 3 Proposal)
  // handler = () => { this.setState() }

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.name}
            placeholder="Search"
            onChange={(e) => this.handleChange({ name: e.target.value })}
          ></input>
          <button type="button" onClick={(e) => this.search(e)}></button>
          <Searchresult result={this.state.searchResult}></Searchresult>
        </div>
      </>
    );
  }
}
