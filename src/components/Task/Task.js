import React, { Component } from 'react';
import { Delete } from '../../components/Delete/Delete'
import './Task.css'


class Task extends Component {

    state = {
        status: this.props.item.status
    }

    handleClick = () => {
        this.setState({ status: !this.state.status })
    }

    notificationToDelete = (id) => {
        this.props.del(id)
    }

    render() {
        const { value, id } = this.props.item
        let checkedClass = this.state.status ? '' : 'checked'
        return(
            <React.Fragment>
                <li className={`task ${checkedClass}`} >
                <span onClick={this.handleClick}>{value}</span>
                <Delete id={id} deleteItem={this.notificationToDelete} />
                </li>
            </React.Fragment>
        );
    }
}

export { Task }