import React from 'react';
import axios from 'axios';



export const ContactsContext = React.createContext()

export const ContactsProvider = props => {

    const [state, setState] = React.useState( {
        contacts: [],
    });

    React.useEffect(() => {
        axios.get('http://localhost:400/contacts')
        .then(({ data }) => {
            setState ({
            contacts: data,
           })
        })
        .catch(err => console.log(err));
    },[])

    return (
    <ContactsContext.Provider value={state}>
        {props.children}
    </ContactsContext.Provider>
    )
}







