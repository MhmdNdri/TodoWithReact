import React, { useState } from 'react'
import "../styles/TaskManager.scss"
import plus from "../assets/plus.png"
import arrow from "../assets/ArrowDown.png"


const TaskManager = ({ setShow }) => {
    return (
        <div className="task-manager">
            <div className="task-manager-add">
                <button className="task-manager-add-btn" onClick={() => setShow(true)}>
                    <img src={plus} className="task-manager-add-btn-plus" />
                    <p className="task-manager-add-btn-txt">Add Task</p>
                </button>
                <h3 className="task-manager-add-tasks">
                    {/* <label class="switch">
                        <input type="checkbox" />
                        <span type="checkbox" className="task-manager-add-tasks-circle"></span>
                    </label> */}

                    {/* <input style={{ marginRight: "10px" }} type="checkbox" />
                    Running */}
                </h3>
            </div>
            <div className="task-manager-completed">
                <h4 className="task-manager-completed-txt">Completed
                <img src={arrow} className="task-manager-completed-down" />
                </h4>
                <h3 className="task-manager-add-tasks task-manager-completed-done"></h3>
            </div>

        </div>
    )
}

export default TaskManager
