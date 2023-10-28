import { useState } from "react";
import InputTask from "./InputTask";
import TaskItem from "./TaskItem";

const TaskArea = () => {

  const [currentTaskList, setCurrentTaskList] = useState<string[]>([])

  const addTask = (task:string) => {
    setCurrentTaskList(prev => [...prev, task])
  }

  return (
    <>
    <TaskItem list = {currentTaskList}/>
    <InputTask addTask = {addTask}/>
    </>
  )
}

export default TaskArea