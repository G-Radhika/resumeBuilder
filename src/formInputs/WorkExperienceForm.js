import React, { Component } from 'react';

class WorkExperienceForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            workExperienceValue: " ",
            value: ""
        };
        this.handleChangeExperience = this.handleChangeExperience.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeExperience(event) {
        console.log("handle Change Experience");
        this.setState({ workExperienceValue: event.target.value });
    }
    handleSubmit(event) {
        console.log("handle Submit Experience");
        event.preventDefault();
        this.props.workFormPropsFunc({ workExp: this.state.workExperienceValue });
    }

    render() {
        console.log("in workexperience form");
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#workExperienceModal">
                    Edit Work Experience
                </button>

                <div className="modal fade" id="workExperienceModal" tabIndex="-1" role="dialog" aria-labelledby="workExperienceModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="workExperienceModalLabel">Edit Work Experience</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Work Experience: </label>
                                        <div className="col-10">
                                            <textarea className="form-control" rows="3" value={this.state.workExpValue} onChange={this.handleChangeExperience} placeholder="Describe your work experience..."></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WorkExperienceForm;