
/**
 * Protita Class ar name first letter Uppercase dite hobe. Lowercase hole html tag dhore nai.
 * 
 */

 //  * Component & React Element
/**
 * Component & React Element
 * ================================
    function holo ekta component r oi function ta jeta return kore seta hole React Element

    // Functional Component
    -------------------------

    // Example:-

    function clock() {
        // Component
        return (
            <h1> Hello</h1>
        )
    }
    //React Element
     ReactDOM.render(<clock /> document.getElementById('root'));


    // Class Component
    -----------------------
    import React from 'react'
    // Example:-
    class clock() extends React.Component {
        // Component
        render(){
            return (
            <h1> Hello</h1>
        )
        }
    }
    //React Element
     ReactDOM.render(<clock /> document.getElementById('root'));

     Props amra sobsomai baire thake call korbo... component ar modde thake change korbo na.
 */

// *  Title: class: 04
/**
      *  Title: class: 04
      * ===============================
      * 
       Contact Manager
       C - Create
       R - Read
       U - Update
       d - Delete


    1. How to write component
       - Functional
       - Class
    2. Props - property ( html property ) JSX (not mutable)
    3. State -  can be modified
    4. Composition (Multiple component combined to one)
    5. Unidirectional data flow(parent to child)

    How component should be divided
     - Reuse (function)  
        1. single responsibility principal 
        2. single responsibility complex code 
     - Complex UI  
        SendEmail()
        // 100 line code (Divide into multiple)

    Easy Rules
      1. Same look but different content
      2. Complex UI ( So many things together)

    Facebook
      - Navigation ( complex UI )
          - searchComponent
          - mainNavigation
          - secondaryNavigation

        Sidebar
          - Admin
          - Insights
          - support
        Main Content
          - main banner
          - group info
          - media
          - posts
             post (same look content different)

*/

// Contact APP
/**
    Contact APP
    =============================

    Navigation
    Home page/ contact page
        contacts
        - contact
    About
    Contact Details

*/

import React, {Component} from "react";
import Contacts from "./Contacts";
// import { BrowserRouter as BrowserRouter, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import {BrowserRouter, Route, Routes } from 'react-router-dom';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from "axios";

import Nav from "./Nav";
import ContactDetails from "./ContactDetails";
import About from "./About";
import Home from "./Home";

import  './style.css'
// import  contacts  from "./data.json";

export default class App extends Component {
    state = {
        contacts: []
      }
    componentDidMount () {
        axios.get('https://randomuser.me/api/?seed=myrandomdata&inc=name,email,login,gender,dob,picture&results=10'
        )
        .then(data => {
            console.log(data.data.results)
            this.setState({
                contacts: data.data.results,
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        const {contacts} = this.state;
       return (       
        <Router>
            <Nav />
            <Switch>
                <Route exact path='/'> <Home /> </Route>
                <Route path='/contacts/:id'> <ContactDetails contacts={contacts} /></Route>
                <Route path='/contacts'> <Contacts contacts={contacts} /> </Route>
                <Route path='/About'><About /> </Route>
            </Switch>
        </Router>

        // <BrowserRouter>
        //     <Nav />
        //         <Routes>
        //             <Route path='/' element={<Home />} />
        //             <Route path='/contacts' element={<Contacts />} />
        //             <Route path='/contacts/:id' element={<ContactDetails />} />
        //             <Route path='/About' element={<About />} />
        //         </Routes>
            
        // </BrowserRouter>
                   
       )
    }
} 


