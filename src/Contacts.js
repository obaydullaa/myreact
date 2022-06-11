import React, { Component } from 'react';
import Contact from './Contact';

export default class Contacts extends Component {
  render() {
    const {contacts} = this.props;
    return (
      <div className='mt-5'>
        <h2 className='text-center mb-3'> All Contacts Goes Here </h2>
        { contacts.map(contact => (
          <Contact contact={contact} key={contact.login.uuid}/>
        ))}
      </div>
    )
  }
} 
