import React, { Component } from 'react';

class ContactsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            contactsArrValue: "[]",
            value: ""
        };
        this.handleChangeContacts = this.handleChangeContacts.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeContacts(event) {
        console.log(event.target.value);
        this.setState({ contactsArrValue: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit({ contacts: this.state.contactsArrValue });
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#contactsModal">
                    Edit Contacts
                </button>

                <div className="modal fade" id="contactsModal" tabIndex="-1" role="dialog" aria-labelledby="contactsModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="contactsModalLabel">Edit Skills</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Contacts: </label>
                                        <div className="col-10">
                                            <textarea className="form-control" rows="3" value={this.state.contactsArrValue} onChange={this.handleChangecontacts} placeholder="Enter your contacts..."></textarea>
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
export default ContactsForm;