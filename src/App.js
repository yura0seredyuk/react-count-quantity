import React, { Component } from "react";
import { QuantitySelector } from './QuantitySelector';
import "./style.css";

class App extends Component {
  state = {
    studentsCount: 800,
    employeesCount: 30,
  }

  addStudents = () => {
    this.setState(state => ({
      studentsCount: state.studentsCount + 1,
    }));
  }

  removeStudents = () => {
    this.setState(state => ({
      studentsCount: state.studentsCount - 1,
    }));
  }

  addEmployees = () => {
    this.setState(state => ({
      employeesCount: state.employeesCount + 1,
    }));
  }

  removeEmployees = () => {
    this.setState(state => ({
      employeesCount: state.employeesCount - 1,
    }));
  }

  render() {
    const { studentsCount, employeesCount } = this.state;

    return (
      <div>
        <h1>Counts: {studentsCount + employeesCount}</h1>

        <QuantitySelector
          title="Students:"
          quantity={studentsCount}
          onRemove={this.removeStudents}
          onAdd={this.addStudents}
        />

        <QuantitySelector
          title="Employees:"
          quantity={employeesCount}
          onRemove={this.removeEmployees}
          onAdd={this.addEmployees}
        />
      </div>
    )
  }
}

export default App;