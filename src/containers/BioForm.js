import React, { Component } from 'react';

export default class BioForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            nameValue: " ",
            locationValue: " ",
            summaryValue: " ",
            value: " "
        };
        console.log("In BioForms.js");
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeSummary = this.handleChangeSummary.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        console.log("handle change Name : EVENT : " + event.target.value);
        this.setState({ nameValue: event.target.value });
    }
    handleChangeLocation(event) {
        console.log("handle change Location : EVENT : " + event.target.value);
        this.setState({ locationValue: event.target.value });
    }

    handleChangeSummary(event) {
        console.log("handle change Summary : EVENT : " + event.target.value);
        this.setState({ summaryValue: event.target.value });
    }

    handleSubmit(event) {
        console.log("handle Submit inthe bio forms page...");
        event.preventDefault();
        this.props.bioFormPropsFunc({ name: this.state.nameValue, location: this.state.locationValue, summary: this.state.summaryValue });
    }


    renderForm() {
        return this.props.bioDetails.map((bio) => {
            <div>
                return (
                     <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Name: </label>
                        <div className="col-10">
                            <input className="form-control" type="text" value={this.state.nameValue} onChange={this.handleChangeName} placeholder="Enter your name..." />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Location: </label>
                        <div className="col-10">
                            <input className="form-control" type="text" value={this.state.locationValue} onChange={this.handleChangeLocation} placeholder="Where do you live..." />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Summary: </label>
                        <div className="col-10">
                            <textarea className="form-control" rows="3" value={this.state.summaryValue} onChange={this.handleChangeSummary} placeholder="Discribe your work in few lines..."></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Photo: </label>
                        <div className="col-10">
                            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                            <small id="fileHelp" className="form-text text-muted">Minimum size: 120px by 120px. Max 5MB</small>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                )
            </div>
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#bioModal">
                    Edit Bio
                </button>

                <div className="modal fade" id="bioModal" tabIndex="-1" role="dialog" aria-labelledby="bioModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="bioModalLabel">Edit Bio Data</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.renderForm()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}