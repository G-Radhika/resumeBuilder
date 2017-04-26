import React, { Component } from 'react';
import './../style/bio.css';

class Bio extends Component {
  render() {

    return (
      <div className="bio">
        <div className="row">
          <h3 className="col-12">Bio: </h3>
          <div className="col-sm-4">
            <img className="bio-details" src={this.props.photo} alt={this.props.name} />
          </div>
          <div className="col-sm-8">
            <h3 className="bio-details">Name : {this.props.name} </h3>
            <h4 className="bio-details">Location: {this.props.location}</h4>
            <p className="bio-details">Summary: {this.props.summary}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Bio;