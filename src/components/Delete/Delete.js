import React, { Component } from 'react';
import './Delete.css'


class Delete extends Component {

    handleDeleteItem = () => {
        this.props.deleteItem(this.props.id)
    }

    render() {

        return(
            <span className="close" onClick={this.handleDeleteItem}></span>
        );
    }
}

export { Delete }