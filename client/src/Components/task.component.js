import React, { useState, useEffect } from "react";
import TaskDataService from "../services/task.service.js";
import Navbar from './navbar';

const Task = props => {
  const initialTaskState = {
    id: null,
    title: "",
    description: "",
    due_date: ""
  };
  const [currentTask, setCurrentTask] = useState(initialTaskState);
  const [message, setMessage] = useState("");

  const getTask = id => {
    TaskDataService.get(id)
      .then(response => {
        setCurrentTask(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTask(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTask({ ...currentTask, [name]: value });
  };

  // const updatePublished = status => {
  //   var data = {
  //     id: currentTask.id,
  //     title: currentTask.title,
  //     description: currentTask.description,
  //     due_date: currentTask.due_date,
  //     published: status
  //   };

  //   TaskDataService.update(currentTask.id, data)
  //     .then(response => {
  //       setCurrentTask({ ...currentTask, published: status });
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  const updateTask = () => {
    TaskDataService.update(currentTask.id, currentTask)
      .then(response => {
        console.log(response.data);
        setMessage("The task was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTask = () => {
    TaskDataService.delete(currentTask.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/tasks");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      <Navbar />
    <div>
      {currentTask ? (
        <div className="edit-form">
          <h4>Task</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTask.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTask.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="due_date">Due Date</label>
              <input
                type="text"
                className="form-control"
                id="due_date"
                name="due_date"
                value={currentTask.due_date}
                onChange={handleInputChange}
              />
            </div>

          <button className="badge badge-danger mr-2" onClick={deleteTask}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTask}
          >
            Update
          </button>
          <p>{message}</p>
          </form>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Task...</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Task;