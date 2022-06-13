import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddContact extends Component {
    // Control component
    state = {
        firstName: '',
        lastName: '',
        email: '',
        dob: new Date(),
        picture: '',
        gender: '',
        error: '',
        // error: {
        //     firstName: '',
        // },
    }

    handleChange = (e)=> {
        console.log(e.target.name, e.target.value);
        this.setState ({
            [e.target.name]: e.target.value,
        })
    }

    handleDateChanger = (date) => {
        this.setState({
            dob: date
        })
    }
    handleSubmit = (e) => {
        const {firstName, lastName, email, dob, picture, gender}  = this.state;
        e.preventDefault();

        // if(firstName === '') {
        //     this.setState({
        //         error: {
        //             firstName: 'First Name is Required',
        //         }
        //     })
        // }
        if(firstName === '' || lastName === '' || email === '' || dob === '' || picture === '' || gender === ''){
            this.setState({
                error: 'Pleas fill all the input with valid info',
            })
        }else{
            // valid input
            console.log(this.state);
            //sending API request to the server 
            axios.post('http://localhost:400/contacts', {
                first_name: firstName,
                last_name: lastName,
                email,
                dob,
                picture,
                gender
            } ).then(data => {
                console.log(data);
                this.props.history.push('/contacts')
            }).catch(error => console.log(error))
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
            <h1 className='text-center mb-4'>Add Contact</h1>
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
                    <DatePicker selected={dob} onChange={this.handleDateChanger}/>
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

export default withRouter(AddContact);
