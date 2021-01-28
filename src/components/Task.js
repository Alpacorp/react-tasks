import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

        StyleCompleted() {
            return{
                fontSize: '20px',
                color: this.props.taske.done ? 'gray': 'black',
                textDecoration: this.props.taske.done ? 'line-through': 'none'
            }
        }

        render(){

        const {taske} = this.props

        return <div style={this.StyleCompleted()}>
        {taske.title} -
        {taske.description} -
        {taske.done} -
        {taske.id}
        <input type="checkbox"/>
        <button style={btnDelete}>
            x
        </button>
        </div>
    }
}

const btnDelete = {
    fontSize: '18px',
    background: 'red',
    color: '#ffffff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
};

export default Task;