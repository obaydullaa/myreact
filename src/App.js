
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

import React from "react";
import Contacts from "./pages/Contacts";
// import { BrowserRouter as BrowserRouter, Route } from 'react-router-dom';
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import {BrowserRouter, Route, Routes } from 'react-router-dom';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from "./components/Nav";
import ContactDetails from "./pages/ContactDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import NotFound from "./pages/NotFound";

import  './style.css'
// import  contacts  from "./data.json";

const App = () => {

    // const { contacts } = state;
    return (       
     <Router>
         <Nav />
         <Switch>
             <Route exact path='/' component={Home} />
             <Route path='/About' component={About} /> 
             <Route path='/add-contact' component={AddContact} />
             <Route path='/contacts/:id' component={ContactDetails} /> 

             <Route path='/edit/:id' component={EditContact} />
             <Route path='/contacts' component={Contacts} />
             <Route component={NotFound} />

         </Switch>
     </Router>        
    )
}

export default App;
