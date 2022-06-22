import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddContact = (props) => {
    const [contact, setContact] = React.useState({
    // Control component
        firstName: '',
        lastName: '',
        email: '',
        dob: new Date(),
        picture: '',
        gender: 'male',
        error: '',
    })
    const [alert, setAlert] = React.useState(false) 
    
    React.useEffect(() => {
        setAlert(false)
    }, [])

    const handleChange = (e) => {
        setContact ({
            ...contact,
            [e.target.name]: e.target.value,
        })
    }

    const handleDateChanger = (date) => {
        setContact({
            ...contact,
            dob: date,
        })
    }

    const handleSubmit = (e) => {
        const {firstName, lastName, email, dob, picture, gender}  = contact;
        e.preventDefault();

      

        if(firstName === '' || lastName === '' || email === '' || dob === '' || picture === '' || gender === ''){
            setContact({
                ...contact,
                error: 'Pleas fill all the input with valid info',
            })
            setAlert(true);

            // if(firstName ===''){
            //     setContact({
            //         ...contact,
            //         error: 'New Error',
            //     })
            // }

        }else{
            console.log("else" + process.env.REACT_APP_API_URI)
            setAlert(false);

            // sending API request to the server 
            axios.post(` ${process.env.REACT_APP_API_URI}/contacts`, contact )
            .then(contact => {
                this.props.history.push('/contacts')
            }).catch(error => console.log(error))
        }
    }


      const {firstName, lastName, email, dob, picture, gender, error}  = contact;
    return (
        <div className='mt-5 mb-5'            
        style={{
            width: '25rem',
            margin: '0 auto'
        }}>
            <h1 className='text-center mb-4'>Add Contact</h1>
           {alert ? <div className='alert alert-danger'>{error}</div> : ''}

            {/* {error && <div className='alert alert-danger'>{error}</div>} */}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" name="firstName" onChange={handleChange} value={firstName} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" name="lastName" onChange={handleChange} value={lastName} className="form-control"/>
                </div>
                <div className="mb-3 onChange={this.handleChange}3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" onChange={handleChange} value={email} className="form-control"/>
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
                        onChange={handleDateChanger}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="picture" className="form-label" onChange={handleChange} value={picture}>Picture</label>
                    <input type="url" name="picture" onChange={handleChange} value={picture} className="form-control"/>
                </div>
                <div className='mb-5'>
                    <select name='gender' className='form-select' onChange={handleChange} value={gender}>
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

export default withRouter(AddContact);
