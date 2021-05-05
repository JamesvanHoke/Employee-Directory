import React, { Component } from "react";
import CardWrapper from "./components/CardWrapper";
import Navbar from "./components/Navbar";
import API from "./utils/API";

class App extends Component {
  state = {
    employees: [],
    userSearch: "",
  };

  // When component loads onto the page we query our user api
  componentDidMount() {
    this.getEmployees();
  }

  // sets our employee state to the api response
  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results });
  };

  //Whenever our search form changes we set our userSearch state to it's value
  handleInputChange = (e) => {
    this.setState({ ...this.state, userSearch: e.target.value });
  };

  render() {
    return (
      <div>
        <Navbar handleInputChange={this.handleInputChange} />
        <CardWrapper
          employees={this.state.employees}
        />
      </div>
    );
  }
}

export default App;
