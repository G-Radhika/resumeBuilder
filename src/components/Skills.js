import React, { Component } from 'react';
import './../style/skills.css';

class Skills extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h3 className="skills-details">Skills: {this.props.skillsArr} </h3>
      </div>
    );
  }
}

export default Skills;