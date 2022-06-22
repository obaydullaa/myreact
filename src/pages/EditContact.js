import React from 'react'
import DatePicker from "react-datepicker";
import axios from 'axios';

const EditContact = (props) => {
    const [contact, setContact] = React.useState({

    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    picture: '',
    gender: '', 
    error: ''
})

const {id} = props.match.params;
React.useEffect( () => {
    axios.get(`${process.env.REACT_APP_API_URI}/contacts/${id}`) 
    .then(({data}) => {
        // const {first_name:firstName, last_name:lastName, email, dob, picture, gender} = data;
        setContact({   
            ...data,
            dob: data.dob && new Date(data.dob), 
        })
    })
    .catch(err => 
        setContact((contact) => ({
            ...contact,
        error: err.message
    }))
    )
},[id])
 

const handleChange = (e) => {
    setContact({
        ...contact,
        [e.target.name]: e.target.value,
    })
}
 
const handleSubmit = (e) => {
    const {firstName, lastName, email, dob, picture, gender}  = contact;
    const {id} = this.props.match.params;
    e.preventDefault();

    if(firstName === '' || lastName === '' || email === '' || dob === '' || picture === '' || gender === ''){
        setContact({
            error: 'Pleas fill all the input with valid info',
        })
    }else{
        // Update data to the api server
        axios.put(`${process.env.REACT_APP_API_URI}/contacts/${id}`, contact)
        .then(({data}) => props.history.push(`/contacts/${id}`))
        .catch(err =>
             setContact({
                ...contact,
           error: err.message,
        }))

    }
}

const handleDateChanger = data => {
    setContact({
        ...contact,
        dob: data,
    })
}


    const {firstName, lastName, email, dob, picture, gender, error}  = contact;
    return (
        <div className='mt-5 mb-5'            
        style={{
            width: '25rem',
            margin: '0 auto'
        }}>
            <h1 className='text-center mb-4'>Edit Contact</h1>
            {error && <div className='alert alert-danger'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" name="firstName" onChange={handleChange} value={firstName} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" name="lastName" onChange={handleChange} value={lastName} className="form-control"/>
                </div>
                <div className="mb-3 onChange={handleChange}3">
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


export default EditContact;