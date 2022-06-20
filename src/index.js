import  ReactDOM  from 'react-dom';
import App from './App';  
import './style.css'

import {ContactsProvider} from './context/Contacts.context';

ReactDOM.render(
     <ContactsProvider> 
        <App />
    </ContactsProvider>, 
    document.getElementById('root'));




