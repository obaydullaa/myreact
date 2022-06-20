mport React, {Component} from "react";
import Contacts from "./pages/Contacts";
// import { BrowserRouter as BrowserRouter, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import {BrowserRouter, Route, Routes } from 'react-router-dom';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from "axios";

import Nav from "./components/Nav";
import ContactDetails from "./pages/ContactDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";

import  './style.css'
// import  contacts  from "./data.json";

export default class App extends Component {
    state = {
        contacts: []
      }
    componentDidMount () {
        axios.get('http://localhost:400/contacts'
        )
        .then(({data}) => {
            // console.log(data)
            this.setState({
                contacts: data,
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
                <Route path='/About'><About /> </Route>
                <Route path='/add-contact'><AddContact /> </Route>
                <Route path='/contacts/:id'> <ContactDetails contacts={contacts} /></Route>
                <Route path='/edit/:id'> <EditContact /></Route>
                <Route path='/contacts'> <Contacts contacts={contacts} /> </Route>
            </Switch>
        </Router>
                   
       )
    }
} 

