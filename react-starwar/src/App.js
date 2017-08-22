import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import VehicleCard from './components/VehicleCard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      pilot: '',
      name: ''

    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      pilot: event.target.value
    })
    console.log('here', this.state.pilot);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      name: this.state.pilot,
      pilot: ''
    })
  }


  componentDidMount() {
  fetch('https://swapi.co/api/vehicles/')
  .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        vehicles: data.results,
      });
      console.log("state", this.state.vehicles);
    })
  }

  render() {

    let vehiclesList = this.state.vehicles.map(function(vehicle, index) {
      return <VehicleCard key={ index } vehicle={ vehicle } />
    })


    return (
      <div className="App container-fluid">
        <Header />
        <Form handleNameChange={this.handleNameChange} handleFormSubmit={this.handleFormSubmit} pilot={ this.state.pilot }/>

        <h1 className="pilot">{ this.state.name }</h1>
        <div className="flex">
          { vehiclesList }
        </div>
      </div>
    );
  }
}

export default App;
