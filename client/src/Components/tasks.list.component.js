import React, { useState, useEffect } from "react";
import TaskDataService from "../services/task.service.js";
import { Link } from "react-router-dom";
import Navbar from "./navbar.js";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTasks();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTasks = () => {
    TaskDataService.getAll()
      .then(response => {
        setTasks(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTasks();
    setCurrentTask(null);
    setCurrentIndex(-1);
  };

  const setActiveTask = (task, index) => {
    setCurrentTask(task);
    setCurrentIndex(index);
  };

  const removeAllTasks = () => {
    TaskDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    TaskDataService.findByTitle(searchTitle)
      .then(response => {
        setTasks(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
    <Navbar />
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Tasks List</h4>

        <ul className="list-group">
          {tasks &&
            tasks.map((task, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTask(task, index)}
                key={index}
              >
                {task.title}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllTasks}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentTask ? (
          <div>
            <h4>Task</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentTask.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentTask.description}
            </div>
            <div>
              <label>
                <strong>Due Date:</strong>
              </label>{" "}
              {currentTask.due_date}
            </div>
            {/* <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentTask.published ? "Published" : "Pending"}
            </div> */}

            <Link
              to={"/tasks/" + currentTask.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Task...</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default TasksList;


















// import React from 'react';
// import axios from 'axios'; 
// import Navbar from "./navbar.js";

// class TaskList extends React.Component {
//     state = {
//         task: "", // current user entered task
//         taskList: [] //holds all the tasks
//     };

//     componentDidMount(){
//         this.getTaskList();
//     };
 
//     getTaskList = () => {
//         axios.get('http://localhost:4000/tasks')
//         .then((response) => response.data)
//         .then((response => this.setState({taskList: response})));
//     };

//     onDeleteClick = id => {
//         axios.delete(`http://localhost:4000/deleteTask/${id}`);
//         this.getTaskList();
//     };

//     onSubmitClick = () => {
//         axios.post('http://localhost:4000/addTask', {
//             task: this.state.task
//         });
//         this.getTaskList();
//         this.setState({task: ''})
//     };


//     render() {
//         console.log(this.state.id);
//         return (
//             <div>
//                 <Navbar />
//                 <h3>TaskList</h3>
//                 <div className="ui input">
//                     <input value={this.state.task} onChange={e => this.setState({
//                         task: e.target.value
//                     })} placeholder="your tasks.." />
//                 </div>
//                 <button className="ui primary button basic" onClick={() => this.onSubmitClick()}>Submit</button>
//                 <hr />
//                 <div className="ui cards">
//                     {this.state.taskList.map((task) => (
//                     <div className="card">
//                         <div className="content">
//                             <div className="meta">
//                                 {task.task_name}
//                             </div>
//                             <div className="extra content">
//                                 <div className="ui two buttons">
//                                     <div className="ui two buttons">
//                                         <button className="ui basic red button" onClick={() => this.onDeleteClick(task.id)}>Delete</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//             </div>
//         )
//     }
// }

// export default TaskList;