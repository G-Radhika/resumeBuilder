import React, { Component } from 'react';
import './../style/skills.css';

class Skills extends Component {
  render() {
    return (
      <div className="skills">
                 <h3 >Skills : </h3>
                 <div className="skill-group">
			 		{
                        this.props.skillsArr.map(function(ele) {
                        return <p key={ele.toString()}>{ele} </p>})
			 		}
                </div>
      </div>
    );
  }
}

export default Skills;