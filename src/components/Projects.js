import React, { Component } from 'react';
import './../style/projects.css';

class Projects extends Component {
  render() {
    return (     
                <div className="container-fluid">
                    <div className="col"><h3>Projects: </h3></div>              
                <div className="col-sm-4">
                    <img className="card-img-top" src="..." alt=" "/>
                    <div className="card-block">
                         <h4 className="card-title">{this.props.projectsArr[0].title}</h4>
                         <p className="card-text">{this.props.projectsArr[0].description}</p>
                    </div>
                <div className="card-footer">
                    <small className="text-muted">Language: {this.props.projectsArr[0].language}</small>
                </div>
                </div>

                <div className="col-sm-4">
                    <img className="card-img-top" src="..." alt=" " />
                    <div className="card-block">
                         <h4 className="card-title">{this.props.projectsArr[1].title}</h4>
                         <p className="card-text">{this.props.projectsArr[1].description}</p>
                    </div>
                <div className="card-footer">
                    <small className="text-muted">Language: {this.props.projectsArr[1].language}</small>
                </div>
                </div>

                <div className="col-sm-4">
                    <img className="card-img-top" src="..." alt=" "/>
                    <div className="card-block">
                         <h4 className="card-title">{this.props.projectsArr[2].title}</h4>
                         <p className="card-text">{this.props.projectsArr[2].description}</p>
                    </div>
                <div className="card-footer">
                    <small className="text-muted">Language: {this.props.projectsArr[2].language}</small>
                </div>
                </div>
            </div>
    );
  }
}

export default Projects;