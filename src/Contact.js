import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Contact extends Component {
  render() {
      const {contact} = this.props
    return (
      <div className='card contact' style={{maxWidth:'400px'}}>
        <div className='card-body'>
          <img className='mb-3' alt={contact.first} src={contact.picture.large} />
          <h3 className='card-title mb-2'>{contact.name.first} {contact.name.last}</h3>
          <p className='card-text'>{contact.email}</p>
          <h5 className='card-text'>{contact.gender}</h5>
          <p className='card-text'>Date of Barth: {contact.dob.date}</p>
          <Link className='btn btn-primary btn-large' to={`/contacts/${contact.uuid}`}>More Details</Link>
        </div>
      </div>
    )
  }
}
