import React, { Component } from 'react';
import './App.css';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';

class App extends Component {
  state = {
    username: 'Saerom'
  }
  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangeHandler}
          currentName={this.state.username}/>
        {/* <UserOutput username = {this.state.username}/>  */}
        <UserOutput username = 'Saerom'/>
      </div>
    );
  }
}

export default App;
