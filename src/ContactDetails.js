
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { format } from 'date-fns';
import axios from "axios";

class ContactDetails extends Component {
  state = {
    contact: {},
  }

  componentDidMount () {
    const id = this.props.match.params.id;
    axios.get(`https://randomuser.me/api/?login-uuid=${id}&seed=rewdfg`
    )
    .then(data => {
        console.log(data.data.results[0]);
        console.log(data.data.results)
        this.setState({
            contact: data.data.results[0],
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
  render() {
    // console.log(this.props);
  const {contact} = this.state
  console.log(format(new Date(), 'yyyy/MM/dd kk:mm:ss'));
    // console.log(this.props.match.params.id)
    return (
      <div className='card contact' style={{maxWidth:'400px'}}>
      <div className='card-body'>
        <img className='card-img-top mb-3' alt={contact?.name?.first} src={contact?.picture?.large} />
        <h3 className='card-title'>{contact?.name?.first} {contact?.name?.last}</h3>
        <p className='card-text'>{contact?.email}</p>
        <h5 className='card-text'>{contact?.gender}</h5>
        <p className='card-text'> Date of Barth: {contact?.dob?.date}</p>
      </div>
      <button className='btn btn-danger' onClick={() => this.props.history.goBack() }>GO BACK</button>
    </div>
    )
  }
}
export default withRouter(ContactDetails)
