import React, { useState, useEffect } from "react";
import TaskDataService from "../services/task.service.js";
import { FaPlus, FaTrash } from 'react-icons/fa';
import '../style/todolist.scss'

export default function Todolist() {


    // RETREIVE data --- start //

    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDuedate] = useState('')
    // const [check, setCheck] = useState(false)
    // const [completedTasks, setcompletedTasks] = useState([])
    // const [completedTask, setcompletedTask] = useState([])


    const retrieveTasks = () => {
        TaskDataService.getAll()
            .then(response => {
                setTasks(response.data);
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    };

    // RETREIVE data --- end //

    // DELETE data --- start //

    const deleteTask = (id) => {
        TaskDataService.delete(id)
            .then(response => {
                console.log(response.data);
                // props.history.push("/tasks");
            })
            .catch(e => {
                console.log(e);
            })
            .then(window.location.reload(false));

        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks)
    };

    // DELETE data --- end //

    // SAVE data --- start //

    const createTask = () => {
        const data = {
            title: title,
            description: description,
            due_date: dueDate,
        };
        console.log(typeof(data))
        TaskDataService.create(data)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        })
        // .then(window.location.reload(false));

    };

    // SAVE data --- end //

    // CHECK -- start // 

    // function checkTask(id) {
    //     const updatedTask = [...tasks].map((task) => {
    //         if(task.id === id) {
    //             task.completed = !task.completed
    //         }
    //     })
    // }


    // CHECK -- end //

    useEffect(() => {
        retrieveTasks();
    }, []);


    return (

        <div className="main-container">

            <div className="todo-container">

                <div className="info-top">

                    <div className="info-top-left">
                        <p className="nb-tasks">{tasks.length} tasks</p>
                    </div>

                    <div className="btn-groups">
                        <button className="btn-top all">
                            <p className="btn-name">all</p>
                        </button>
                        <button className="btn-top active">
                            <p className="btn-name">active</p>
                        </button>
                        <button className="btn-top completed">
                            <p className="btn-name">completed</p>
                        </button>

                    </div>

                </div>


                <h4 className="add-item-title">Add a new item to your list</h4>

                <div className="add-item-container add-item-container-p1">

                    <div className="add-item">
                        <input className="input-task input-task-title" type="text" placeholder="task title"
                            onChange={(e) => {
                                const title = e.target.value
                                setTitle(title)
                            }}></input>
                        <div className="bar-under-input" />
                    </div>

                    <div className="add-item">
                        <input className="input-task input-task-description" type="text" placeholder="task description"
                            onChange={(e) => {
                                const description = e.target.value
                                setDescription(description)
                            }}
                        ></input>
                        <div className="bar-under-input" />
                    </div>

                </div>

                <div className="add-item-container add-item-container-p2">

                    <div className="due-date-title">Due date</div>
                    <div className="add-item due-date-container">

                        <input className="input-task input-task-date" type="date"
                            onChange={(e) => {
                                const dueDate = e.target.value
                                setDuedate(dueDate)
                            }}
                        ></input>
                    </div>


                    <div className="btn-added-container">
                        <button className="btn-plus" onClick={createTask}><FaPlus /></button>
                        <div className="added-tag-anim">Added !</div>
                    </div>


                </div>


                <div className="list-container">


                    {tasks.map((task) => {

                        return (
                            <div className="todolist-single-item">
                                <div className="left-single-item" >

                                    <div className="single-item-name single-item-name-box">{task.title}
                                        {/* <div className="line-through"/> */}
                                    </div>


                                    <div className="single-item-description single-item-description-box">{task.description}
                                        {/* <div className="line-through"/> */}
                                    </div>

                                </div>
                                <div className="right-single-item">
                                    <div className="single-item-due-date">{task.due_date}</div>
                                </div>
                                <div className="checkbox-container">

                                    <button className="trash-btn button-item" onClick={() => { deleteTask(task.id) }}><FaTrash /></button>

                                </div>
                            </div>
                        )

                    })}








                </div>





            </div>

        </div>

    )
}
