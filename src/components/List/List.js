import React, { Component } from 'react';
import { Task } from '../../components/Task/Task'

class List extends Component {

    deleteTask = (id) => {
        this.props.deleteTask(id)
    }

    makeList() {
        const { data } = this.props
        let newList = null

        if(data.length) {
            newList = data.map((item) => {
                return <Task key={item.id} item={item} del={this.deleteTask} />
            })
        } else {
            newList = <p>No anything</p>
        }

        return newList
    }

    render() {


        return (
            <ul className="todo-list">
                {this.makeList()}
            </ul>
        );
    }
}

export { List }