import React, { Component } from 'react';

export default class VehicleCard extends Component {
  render() {
    return (
      <div className="card v-card">
        <h3>Vehicle: { this.props.vehicle.name }</h3>
        <h5>Model: { this.props.vehicle.model }</h5>
        <div className="each-card">
          <h5>Specs</h5>
          <hr/>
          <p>Manufacturer: { this.props.vehicle.manufacturer }</p>
          <hr/>
          <p>Class: { this.props.vehicle.vehicle_class }</p>
          <hr/>
          <p>Passengers: { this.props.vehicle.passengers }</p>
          <hr/>
          <p>Crew: { this.props.vehicle.crew }</p>
          <hr/>
          <p>Length: { this.props.vehicle.length }</p>
          <hr/>
          <p>Max Speed: { this.props.vehicle.max_atmosphering_speed }</p>
          <hr/>
          <p>Cargo Capacity: { this.props.vehicle.cargo_capacity }</p>
        </div>
      </div>
    )
  }
}
