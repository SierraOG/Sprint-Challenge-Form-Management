import React from 'react';
import './App.css';

import axios from 'axios'

import Form from './components/Form'
import DataList from './components/DataList'
import UserList from './components/UserList'

class App extends React.Component{
  _isMounted = false;
  constructor(){
    super()
    this.state = {
      dataArray: [],
      userArray: []
    }
  }

  componentDidMount(){
    this._isMounted = true
    this.getData()
    this.getUsers()
  }

  getData(){
    if (this._isMounted) {
      axios.get('http://localhost:5000/api/restricted/data')
      .then(data => {
        console.log(data)
        this.setState({dataArray: data.data})
      })
   }
  }

  getUsers(){
    if (this._isMounted) {
      axios.get('http://localhost:5000/api/restricted/users')
      .then(data => {
        console.log(data)
        this.setState({userArray: data.data})
      })
   }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className='app'>
        <h1>Sign Up</h1>
        <Form />
        { (this._isMounted) ? <DataList dataArray={this.state.dataArray}/> : null }
        <h2>People</h2>
        <UserList userArray={this.state.userArray} />
      </div>
    )
  }
}

export default App;
