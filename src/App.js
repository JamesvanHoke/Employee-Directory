import React, { Component } from "react";
import CardWrapper from "./components/CardWrapper";
import Navbar from "./components/Navbar";
import API from "./utils/API";

class App extends Component {
  state = {
    employees: [],
    userSearch: "",
    filteredEmployees: [],
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

  // when the search for changes we check if the new value is the same as it was previously. if it isn't we filter our employees by name and pass it into a new array in our state
  componentDidUpdate(prevProps, prevState) {
    const searchParam = this.state.userSearch.toLocaleLowerCase();
    if (this.state.userSearch !== prevState.userSearch) {
      const filtered = this.state.employees.filter((employee) => {
        return (
          employee.name.first.toLowerCase().includes(searchParam) ||
          employee.name.last.toLowerCase().includes(searchParam)
        );
      });
      this.setState({ ...this.setState, filteredEmployees: filtered });
    }
  }

  // Conditionally render between filtered employees if it contains data, or our general employee array using short circuiting
  render() {
    const isFiltered = this.state.filteredEmployees.length;
    return (
      <div>
        <Navbar handleInputChange={this.handleInputChange} />
        <CardWrapper
          employees={
            isFiltered ? this.state.filteredEmployees : this.state.employees
          }
        />
      </div>
    );
  }
}

export default App;
