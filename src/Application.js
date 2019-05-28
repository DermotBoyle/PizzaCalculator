import React, { Component } from 'react';

import Title from './Title';
import Input from './Input';
import Result from './Result';

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

class Application extends Component {
  state = {
    numberOfPeople: 0,
    slicesPerPerson: 0,
    numberOfPizzas: calculatePizzasNeeded(10, 2),
  };

  updateNumberOfPeople = event => {
    const numberOfPeople = parseInt(event.target.value, 10);
    this.setState({
      numberOfPeople,
      numberOfPizzas: calculatePizzasNeeded(
        numberOfPeople,
        this.state.slicesPerPerson,
      ),
    });
  };

  updateSlicesPerPerson = event => {
    const slicesPerPerson = parseInt(event.target.value, 10);
    this.setState({
      slicesPerPerson,
      numberOfPizzas: calculatePizzasNeeded(
        this.state.numberOfPeople,
        slicesPerPerson,
      ),
    });
  };

  reset = () => {
    this.setState({ numberOfPeople: 0, slicesPerPerson: 0 });
  };

  render() {
    const { numberOfPeople, slicesPerPerson, numberOfPizzas } = this.state;

    return (
      <div className="Application">
        <Title />
        <Input
          label="Number of Guests"
          type="number"
          min={0}
          value={numberOfPeople}
          name="numberOfPeople"
          onChange={this.updateNumberOfPeople}
        />
        <Input
          label="Slices Per Person"
          type="number"
          min={0}
          value={slicesPerPerson}
          name="slicesPerPerson"
          onChange={this.updateSlicesPerPerson}
        />
        <Result amount={numberOfPizzas} />
        <button className="full-width" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Application;
