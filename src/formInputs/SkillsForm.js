import React, { Component } from 'react';

class SkillsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            skillsArrValue: "",
            value: " "
        };
        this.handleChangeSkills = this.handleChangeSkills.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeSkills(event) {
        console.log("Handle change SKILLS");
        this.setState({ skillsArrValue: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.skillsArrValue[0]);
        this.props.skillsFormPropsFunc({ skills: this.state.skillsArrValue });
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#skillsModal">
                    Edit Skills
                </button>

                <div className="modal fade" id="skillsModal" tabIndex="-1" role="dialog" aria-labelledby="skillsModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="skillsModalLabel">Edit Skills</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Skills: </label>
                                        <div className="col-10">
                                            <textarea className="form-control" rows="3" value={this.state.skillsArrValue} onChange={this.handleChangeSkills} placeholder="Enter your skills set..."></textarea>
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
export default SkillsForm;