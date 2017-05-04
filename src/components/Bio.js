import React, { Component } from 'react';
import './../style/bio.css';

export default class Bio extends Component {
  
  render() {
    console.log("In Bio.js");
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <img className="bio-details" src={this.props.photo} alt={this.props.bioProps.name} />
          </div>
          <div className="col-sm-8">
            <h4 className="bio-details">Name : {this.props.bioProps.name} </h4>
            <h4 className="bio-details">Location: {this.props.bioProps.location}</h4>
            <p  className="bio-details">Summary: {this.props.bioProps.summary}</p>           
          </div>
        </div>
      </div>
    );
  }
}