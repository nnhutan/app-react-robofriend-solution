import React, { Component } from 'react';
import CardList from './CardList';
//import SearchBox from '../components/SearchBox';
//import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{

  constructor() {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }
  render(){
    const {robots} = this.state;
    return(
      <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <CardList robots={robots} />
      </div>
    )
  }
}
export default App;
