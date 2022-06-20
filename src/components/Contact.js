import React, { Component } from 'react';
import { Link } from "react-router-dom";
import dayjs from 'dayjs';


export default class Contact extends Component {
  render() {
      const {contact} = this.props
    return (
      <div className='card contact' style={{maxWidth:'400px'}}>
        <div className='card-body'>
          <img className='mb-3' alt={contact.firstName} src={contact.picture} />
          <h3 className='card-title mb-2'>{contact.firstName} {contact.lastName}</h3>
          <p className='card-text'>{contact.email}</p>
          <h5 className='card-text'>{contact.gender}</h5>
          <p className='card-text'>Date of Barth: {dayjs(contact.dob).format('DD/MM/YYYY')}</p>
          <Link className='btn btn-primary btn-large' to={`/contacts/${contact.id}`}>More Details</Link>
        </div>
      </div>
    )
  }
}
