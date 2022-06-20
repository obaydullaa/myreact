import React from 'react';
import Contact from '../components/Contact';

import {ContactsContext} from '../context/Contacts.context'

const contactStyle = {
  maxWidth: '400px',
  margin: '20px auto',
  background: 'blanchedalmond',
  padding: '20px',
  textAlign: 'center',
}

const Contacts = (props) => {
  const context = React.useContext(ContactsContext);
  const [search, setSearch] = React.useState('');
  const {contacts} = context;
  const filteredContacts = contacts.filter(contact => contact.firstName.includes(search) || contact.lastName.includes(search) )
  
    return (
      <div style={contactStyle} className='mt-5'>
        <h2 className='text-center mb-5'> All Contacts Goes Here </h2>
        <input 
          className='form-control mb-5'
          type='search'
          name='search'
          onChange={e => setSearch(e.target.value)}
          placeholder='Search Contact'
        />
        { filteredContacts.length > 0 &&
        filteredContacts.map(contact => (
          <Contact contact={contact} key={contact.id}/>
        ))}
      </div>
    )
} 

export default Contacts;
