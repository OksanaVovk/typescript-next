"use client"
import React from "react";
import { ITask } from "./TaskList";
interface IPrors{
    task: ITask,
    onRemove: (id: number)=> void,
    onToggle: (id: number)=>void,
}


const TaskItem: React.FC<IPrors> = ({ task, onRemove, onToggle }) => {

const onClickBtn = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement; // HTMLInputElement для input
    const nextSibling = target.nextSibling as HTMLElement;

    if (nextSibling) {
        nextSibling.style.textDecoration = target.checked ? "line-through" : "none";
    }
};
    
    return (<li className="task-item">
        <input className="task-item-checkbox" type="checkbox" name="checkbox" defaultChecked={task.completed} onChange={()=>onToggle(task.id)} onClick={(event: React.MouseEvent<HTMLInputElement>)=>onClickBtn(event)} />
        <p className="task-item-text" style={{ textDecoration: task.completed? "line-through": "none"}} >{task.text}</p>
        <button className="task-item-remove-button" onClick={()=>onRemove(task.id)}>Remove</button>
        </li>
)
}
export default TaskItem;