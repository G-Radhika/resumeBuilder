import React, { Component } from 'react';
/*TO DO:
1. On submit form should close just like 'X' button
2.  */
class BioForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            value: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

   handleSubmit(e){
		e.preventDefault()

		this.props.onFormSubmit({
            name: this.refs.name.value,
            location: this.refs.location.value,
            summary: this.refs.summary.value,
            photo: "photo_default.png"
        });

        this.refs.name.value = ''
        this.refs.location.value = ''
        this.refs.summary.value = ''
        this.refs.photo.value = ''
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
                                            <input className="form-control" type="text" value={this.state.nameValue} refs="name" placeholder="Enter your name..." />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Location: </label>
                                        <div className="col-10">
                                            <input className="form-control" type="text" value={this.state.locationValue} refs="location" placeholder="Place..." />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Summary: </label>
                                        <div className="col-10">
                                            <textarea className="form-control" rows="3" value={this.state.summaryValue} refs="summary" placeholder="Discribe your work in few lines..."></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Profile Image: </label>
                                        <div className="col-10">
                                            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                                            <img src="" alt=""/>
                                            <small id="fileHelp" className="form-text text-muted">Minimum size: 120px by 120px. Max 5MB</small>
                                        </div>
                                    </div>

                                    <input type="submit" value="Submit"  /> 
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