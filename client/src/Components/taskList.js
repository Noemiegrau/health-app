import React from 'react';
import axios from 'axios'; 

class TaskList extends React.Component {
    state = {
        task: "", // current user entered task
        taskList: [] //holds all the tasks
    };

    componentDidMount(){
        this.getTaskList();
    };
 
    getTaskList = () => {
        axios.get('http://localhost:4000/tasks')
        .then((response) => response.data)
        .then((response => this.setState({taskList: response})));
    };

    onDeleteClick = id => {
        axios.delete(`http://localhost:4000/deleteTask/${id}`);
        this.getTaskList();
    };

    onSubmitClick = () => {
        axios.post('http://localhost:4000/addTask', {
            task: this.state.task
        });
        this.getTaskList();
        this.setState({task: ''})
    };


    render() {
        console.log(this.state.id);
        return (
            <div>
                <h3>TaskList</h3>
                <div className="ui input">
                    <input value={this.state.task} onChange={e => this.setState({
                        task: e.target.value
                    })} placeholder="your tasks.." />
                </div>
                <button className="ui primary button basic" onClick={() => this.onSubmitClick()}>Submit</button>
                <hr />
                <div className="ui cards">
                    {this.state.taskList.map((task) => (
                    <div className="card">
                        <div className="content">
                            <div className="meta">
                                {task.task_name}
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div className="ui two buttons">
                                        <button className="ui basic red button" onClick={() => this.onDeleteClick(task.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default TaskList;