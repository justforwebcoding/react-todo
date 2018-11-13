import React, { Component } from 'react';
import { List } from './components/List/List'
import { Add } from './components/Add/Add'
import './App.css';

class App extends Component {

  state = {
    list: [],
    track: 0
  }

  // trackCompleted = () => {
  //   let acc = 0;
  //   this.state.list.forEach((element) => {
  //     if(element.status)  {
  //       acc++
  //     }
  //   });

  //   this.setState( { track: acc })
  // }

  handleAddTask = (data) => {
      this.setState(prevState => ({ 
        list: [...prevState.list, data]
      }))
     // this.trackCompleted()
  }

  handleDeleteTask = (id) => {
    let newList = this.state.list.filter(elem => elem.id !== id)
    this.setState({ list: newList})
   // this.trackCompleted()
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
