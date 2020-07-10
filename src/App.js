import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
/*
function App(props) {
    return ( <
        div > Hello from { props.name }
        age = { props.age } < /div>
    );
}
*/
function App({ name, age }) {
    return ( < div > Hello from { name }
        age = { age } <
        br / >
        <
        Hello firstname = { name }
        / > < /
        div >
    );
}

export default App;