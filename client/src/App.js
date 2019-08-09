import React from 'react';
import './App.css';

import Form from './components/Form'

class App extends React.Component{
  constructor(){
    super()
  }

  render() {
    return (
      <div className='app'>
        <h1>Sign Up</h1>
        <Form />
      </div>
    )
  }
}

export default App;
