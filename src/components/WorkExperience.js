import React, { Component } from 'react';
import './../style/WorkExperience.css';

class WorkExperience extends Component {

  render() {
    console.log("in workexperience.js");
    return (
      <div className="container-fluid">
        <h4 className="work-details">Work Experience: {this.props.workExpProps} </h4>
      </div>
    );
  }
}
export default WorkExperience;