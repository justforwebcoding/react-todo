import React, { Component } from 'react';
import { List } from './components/List/List'
import { Add } from './components/Add/Add'
import './App.css';

class App extends Component {

  state = {
    list: [],
    track: 0
  }

  trackCompleted = (state) => {
    let acc = 0;
    state.list.forEach((element) => {
      if(element.status)  {
        acc++
      }
    });

    state.track = acc
    return state
  }

  handleAddTask = (data) => {
    let state = this.state
    state.list = [...state.list, data]
    state = this.trackCompleted(state)
    this.setState({ state })
  }

  handleDeleteTask = (id) => {
    let state = this.state
    state.list = this.state.list.filter(elem => elem.id !== id)
    state = this.trackCompleted(state)
    this.setState({ state })
  }



  render() {

    const { list, track } = this.state 

    return (
      <React.Fragment>
        <h1>TODO</h1>
        <Add addTask={this.handleAddTask}/>
        <List deleteTask={this.handleDeleteTask} data={list}/>
        <p>{track}</p>
      </React.Fragment>
    );
  }
}

export default App;
