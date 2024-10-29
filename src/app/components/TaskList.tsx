"use client"
import React from "react";
import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";


export interface ITask {
    id: number,
    text: string,
    completed: boolean,       
}
interface IProps{
    tasks?: ITask[]
}

const TaskList: React.FC<IProps> = (prors) => {
    const [task, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<ITask[]>([]);


    useEffect(() => {
        const savedTaskList = localStorage.getItem("tasks");
        const startList = prors.tasks || (savedTaskList? JSON.parse(savedTaskList):[]);
        setTaskList(startList);          
    }, [prors.tasks]);
    
       useEffect(() => {
     window.localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

    const onClickButton = (e: React.FormEvent) => {
         e.preventDefault();
        setTaskList((prevTasks) => {
            return [...prevTasks,
            {
                id: Math.random(),
                text: task,
                completed: false,
            }
            ]
        });
        setTask("");
    }


    const handleCange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.currentTarget.value);
        
    }

    const handleRemoveTask= (id: number)=> {
        setTaskList(taskList.filter(el => el.id !== id));
    }

    const handleToggleTask = (id: number) => {
        const changeTaskIndex = taskList.findIndex(task => task.id === id);
        taskList[changeTaskIndex].completed = !taskList[changeTaskIndex].completed;   
    }
    

    return (<div className="task-list">
       <h1 className="task-list-title">Task List</h1>
        <form className="add-task-form" onSubmit={onClickButton}>
            <input className="add-task-input" value={task} onChange={handleCange} />
            <button className="add-task-button" type="submit">Add</button> 
        </form>
        <ul className="task-list">
            {taskList.length>0 ?taskList.map((taskItem) => {
                return (
                    <TaskItem key={taskItem.id} task={taskItem}
                        onRemove={(id)=>handleRemoveTask(id)}
                        onToggle={(id)=>handleToggleTask(id)}
                    />)
            }):<p className="task-list-empty">No tasks to display</p>}
        </ul>
    </div>)
}

export default TaskList;