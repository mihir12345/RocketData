import "./App.css";
import React, { Component } from "react";
import Cardlist from "./card-list/card-list-component";
import { connect } from "react-redux";

import { setRocket } from "./redux/rocket/rocket.actions";

class App extends Component {
  componentDidMount() {
    fetch(`https://api.spacexdata.com/v3/launches?page=${1}`)
      .then((response) => response.json())
      .then((data) => this.props.setRocket(data));
  }

  render() {
    return (
      <div className="App">
        <h1>Rocket Data</h1>
        <Cardlist />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setRocket: (rocket) => dispatch(setRocket(rocket)),
});
export default connect(null, mapDispatchToProps)(App);
