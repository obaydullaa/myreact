import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className='text-center p-5'>
        <h2 className='display-5'>It is your Home Page</h2>
        <p className='lead'>Let's Share our contact info </p>
        <Link to='/contacts' className='btn btn-primary'>Brows Contacts</Link>
      </div>
    )
  }
}
