// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Cardlist from "./components/card-list-component";
import SearchField from "./components/searchField-component";
// import './searchField/searchField_style.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      rocket: [],
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch(`https://api.spacexdata.com/v3/launches?page=${1}`)
      .then((response) => response.json())
      .then((user) => this.setState({ rocket: user }));
  }

  render() {
    const rocket = this.state.rocket;
    const searchField = this.state.searchField;
    // const {rocket,searchField}=this.state.searchField

    const filterrocket = rocket.filter((rocket) =>
      rocket.mission_name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Rocket Data</h1>

        <input
          className="search"
          type="search"
          placeholder="Search rocket"
          onChange={this.handleChange}
        />
        {/* <Cardlist rocket={this.state.rocket}> */}
        {/* <SearchField
 placeholder='Search rocket' 
 handleChange={this.handleChange}
 />  */}
        <Cardlist rocket={filterrocket}></Cardlist>
      </div>
    );
  }
}

export default App;
