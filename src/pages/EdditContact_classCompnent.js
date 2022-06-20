import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from 'axios';

class EditContact extends Component {

state = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    picture: '',
    gender: '', 
    error: ''
}
 
componentDidMount() {
    const {id} = this.props.match.params;
    axios.get(`http://localhost:400/contacts/${id}`) 
    .then(({data}) => {
        // const {first_name:firstName, last_name:lastName, email, dob, picture, gender} = data;
        this.setState({  
            ...data,
            dob: data.dob && new Date(data.dob), 
        })
    })
    .catch(err => this.setState({
        error: err.message,
    }))
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    })
}
 
handleSubmit = (e) => {
    const {firstName, lastName, email, dob, picture, gender}  = this.state;
    const {id} = this.props.match.params;
    e.preventDefault();

    if(firstName === '' || lastName === '' || email === '' || dob === '' || picture === '' || gender === ''){
        this.setState({
            error: 'Pleas fill all the input with valid info',
        })
    }else{
        // Update data to the api server
        axios.put(`http://localhost:400/contacts/${id}`, this.state)
        .then(({data}) => this.props.history.push(`/contacts/${id}`))
        .catch(err => this.setState({
           error: err.message,
        }))


    }
}
  render() {
    const {firstName, lastName, email, dob, picture, gender, error}  = this.state;
    return (
        <div className='mt-5 mb-5'            
        style={{
            width: '25rem',
            margin: '0 auto'
        }}>
            <h1 className='text-center mb-4'>Edit Contact</h1>
            {error && <div className='alert alert-danger'>{error}</div>}
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" name="firstName" onChange={this.handleChange} value={firstName} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" name="lastName" onChange={this.handleChange} value={lastName} className="form-control"/>
                </div>
                <div className="mb-3 onChange={this.handleChange}3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" onChange={this.handleChange} value={email} className="form-control"/>
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Date of Birth</label>
                    <DatePicker 
                        selected={dob}
                        showMonthDropdown
                        showYearDropdown
                        dateFormat='dd/MM/yyyy'
                        dropdownMode='select'
                        maxDate={new Date()}
                        onChange={this.handleDateChanger}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="picture" className="form-label" onChange={this.handleChange} value={picture}>Picture</label>
                    <input type="url" name="picture" onChange={this.handleChange} value={picture} className="form-control"/>
                </div>
                <div className='mb-5'>
                    <select name='gender' className='form-select' onChange={this.handleChange} value={gender}>
                        <option value='' disabled> {' '}Select Gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary text-center">Submit</button>
            </form>
        </div>
    )
  }
}


export default withRouter(EditContact);