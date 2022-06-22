
import React from 'react';
import { Link,} from 'react-router-dom';
import axios from "axios";

const ContactDetails = (props) => {
  const [contact, setContact] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const id = props.match.params.id;
  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URI}/contacts/${id}`)
    .then(({data}) => {
        setContact(data)
        setLoading(false)
    })
    .catch(err => console.log(err));
  }, [id])

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
  const handleDeleteContact = (id) => {
     axios.delete(`${process.env.REACT_APP_API_URI}/contacts/${id}`)
     .then(data => {
      props.history.push('/contacts')
     }).catch(err => console.log(err))
  }

    // console.log(this.props);

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
          <button className='btn btn-danger mb-2' onClick={() => handleDeleteContact(contact.id)} >Delete Contact </button>
          <Link className='btn btn-info mb-2' to={`/edit/${contact.id}`} >Edit Contact </Link>
          <button className='btn btn-success' onClick={() => props.history.goBack() }>GO BACK</button>
      </div>
      )}
      </>
    )
  }


export default ContactDetails;