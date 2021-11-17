import React from 'react'
import '../style/todolist.scss'
import { FaPlus } from 'react-icons/fa';

export default function Todolist() {
    return (
        <div className="main-container">

            <div className="todo-container">

                <div className="info-top">

                    <div className="info-top-left">
                        <h2 className="date">Tue Nov 16 2021</h2>
                        <p className="nb-tasks">5 task</p>
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


                <div className="add-item-container">

                    <div className="add-item">
                        <h4 className="add-item-title">Add a new item to your list</h4>
                        <input className="input-task" type="text" placeholder="add a new task"></input>
                        <div className="bar-under-input" />
                    </div>

                    <div className="btn-added-container">
                        <button className="btn-plus"><FaPlus /></button>
                        <div className="added-tag-anim">Added !</div>
                    </div>




                </div>


                <div className="list-container">

                    



                </div>


            </div>





        </div>
    )
}
