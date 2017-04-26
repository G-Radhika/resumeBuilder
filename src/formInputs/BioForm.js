import React, { Component } from 'react';

class BioForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("in contructor");
    }

    handleChange(event) {
        this.setState({ value: event.target.nameValue });
        this.setState({ value: event.target.locationValue });
        this.setState({ value: event.target.summaryValue });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.nameValue +
            'A name was submitted: ' + this.state.locationValue +
            'A name was submitted: ' + this.state.summaryValue);
        event.preventDefault();
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
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Name: </label>
                                        <div className="col-10">
                                            <input className="form-control" type="text" value={this.state.nameValue} onChange={this.handleChange} placeholder="Enter your name..." />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Location: </label>
                                        <div className="col-10">
                                            <input className="form-control" type="text" value={this.state.locationValue} onChange={this.handleChange} placeholder="Where do you live..." />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Summary: </label>
                                        <div className="col-10">
                                            <textarea className="form-control" rows="3" value={this.state.summaryValue} onChange={this.handleChange} placeholder="Discribe your work in few lines..."></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Photo: </label>
                                        <div className="col-10">
                                            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                                            <small id="fileHelp" className="form-text text-muted">Minimum size: 120px by 120px. Max 5MB</small>
                                        </div>
                                    </div>
                                    <input aria-hidden="true" type="submit" value="Submit" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BioForm;