import React, { useState } from "react";
import TaskDataService from "../services/task.service.js";
import Navbar from "./navbar.js";

const AddTask = () => {
  const initialTaskState = {
    id: null,
    title: "",
    description: "",
    due_date: ""
  };
  const [task, setTask] = useState(initialTaskState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const saveTask = () => {
    var data = {
      title: task.title,
      description: task.description,
      due_date: task.due_date
    };

    TaskDataService.create(data)
      .then(response => {
        setTask({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          due_date: response.data.due_date
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
      .then(window.location.reload(false));
  };

  const newTask = () => {
    setTask(initialTaskState);
    setSubmitted(false);
  };


  return (
    <div>
      {/* <Navbar /> */}
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTask}>
            Add more tasks?
          </button>
        </div>
      ) : (
        <div>
          <h4>Add a task</h4>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={task.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={task.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="due_date">Due Date</label>
            <input
              type="text"
              className="form-control"
              id="due_date"
              required
              value={task.due_date}
              onChange={handleInputChange}
              name="due_date"
            />
          </div>

          <button onClick={saveTask} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default AddTask;