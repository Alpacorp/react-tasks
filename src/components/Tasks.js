import React, { Component } from 'react';
import Task from './Task';

class Tasks extends Component{
    render(){
        return this.props.task.map(element => <Task taske={element} key={element.id}/>);
    }
}

export default Tasks;