import React, { Component } from 'react';


class Add extends Component {

    state = {
        id: '',
        value: '',
        status: true,
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    addTaskToList = (e) => {
        this.props.addTask({ 
            id: +new Date(),
            value: this.state.value,
            status: true,
         })
    }

    render() {
        let { value } = this.state
        return(
            <div className="add-task">
                <input onChange={this.handleChange} value={value}/>
                <button onClick={this.addTaskToList}>Add</button>
            </div>
        );
    }
}

export { Add }