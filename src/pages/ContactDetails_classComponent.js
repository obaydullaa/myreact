
import React, { Component } from 'react';
import { withRouter, Link,} from 'react-router-dom';
import axios from "axios";


class ContactDetails extends Component {
  state = {
    contact: {},
    loading: true,
  }

  componentDidMount () {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:400/contacts/${id}`)
    .then(({data}) => {
        console.log(data)
        this.setState({
            contact: data,
            loading: false,
        })
    })
    .catch(err => console.log(err));
}

  // findContact() {
  //   const id = this.props.match.params.id;
  //   const contact = this.props.contacts.find(contact => contact.id === Number(id));
  //   this.setState ({
  //       contact: contact,
  //   })
  // }
  // componentDidMount() {
  //   this.findContact();
  // }
  handleDeleteContact = (id) => {
     axios.delete(`http://localhost:400/contacts/${id}`)
     .then(data => {
      this.props.history.push('/contacts')
     }).catch(err => {
      console.log(err)
     }).catch(err => console.log(err))
  }
  render() {
    // console.log(this.props);
  const {contact, loading} = this.state

    // console.log(this.props.match.params.id)
    return (
      <>
        {loading ? (<p>loading...</p>) :(
        <div className='card contact' style={{maxWidth:'400px'}}>
          <div className='card-body'>
            <img className='card-img-top mb-3' alt={contact.firstName} src={contact.picture} />
            <h3 className='card-title'>{contact.firstName} {contact.lastName}</h3>
            <p className='card-text'>{contact.email}</p>
            <h5 className='card-text'>{contact.gender}</h5>
            <p className='card-text'> Date of Barth: {new Date(contact.dob).getUTCFullYear()}</p>
          </div>
          <buttonLink className='btn btn-danger mb-2' onClick={() => this.handleDeleteContact(contact.id)} >Delete Contact </buttonLink>
          <Link className='btn btn-info mb-2' to={`/edit/${contact.id}`} >Edit Contact </Link>
          <button className='btn btn-danger' onClick={() => this.props.history.goBack() }>GO BACK</button>
      </div>
      )}
      </>
    )
  }
}
export default withRouter(ContactDetails)
