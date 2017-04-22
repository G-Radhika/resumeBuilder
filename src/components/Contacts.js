import React, { Component } from 'react';
import './../style/contacts.css';

class Contacts extends Component {
  render() {
    return (
      <div className="contact">
        <p>Contact Me...</p>
       <div className="contacts-group">
			 		{
              this.props.contactsArr.map(function(ele) {
              return <p key={ele.toString()}>{ele}</p>})
			 		}
        </div>
      </div>
    );
  }
}

export default Contacts;