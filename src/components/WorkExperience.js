import React, { Component } from 'react';
import './../style/WorkExperience.css';

class WorkExperience extends Component {
  render() {
    return (
      <div className="WorkExperience">
          <h4 className="details">WorkExperience: {this.props.WorkExperience} </h4>
      </div>
    );
  }
}

export default WorkExperience;