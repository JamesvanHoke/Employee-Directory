import React, { Component } from "react";
import CardWrapper from "./components/CardWrapper";
import Navbar from "./components/Navbar";
import API from "./utils/API";

class App extends Component {
  state = {
    employees: [],
  };

  // When component loads onto the page we query our user api
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results });
    // console.log(this.state.employees[0].name.first)
  };

  render() {
    return (
      <div>
        <Navbar />
        <CardWrapper employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
