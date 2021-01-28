import React, {Component} from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';

console.log(tasks);

class App extends Component{

    state = {
        tasks: tasks
    };

    render(){
        return <div>
            <Tasks task={this.state.tasks}/>
        </div>
    }
}

export default App;