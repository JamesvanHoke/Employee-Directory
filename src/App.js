import React, { Component } from "react";
import Card from "./components/Card";
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
        
        <tbody>
        {this.state.employees.map(
          ({ picture, name, phone, email, dob, id }) => {
            return (
              <Card
              key={id.value}
              image={picture.thumbnail}
              firstName={name.first}
              lastName={name.last}
              phone={phone}
              email={email}
              date={dob.date.slice(0, -14)}
              />
              );
            }
            )}
            </tbody>
      </div>
    );
  }
}

export default App;
