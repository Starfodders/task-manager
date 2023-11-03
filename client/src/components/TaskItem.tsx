import { useSelector, useDispatch } from "react-redux";
import { listValue, clearList, remove } from "./ListItemsSlice"
import { prePostContents, updateTitle } from "./PostContentSlice";
import { historyState } from "./UpdateHistorySlice"
import InputTask from "./InputTask";
import React, { useEffect } from "react";

interface Task {
  items: string,
  completed: boolean
}

const TaskItem = () => {

  const dispatch = useDispatch()
  const accessPrePost = useSelector(prePostContents)
  const isUploading = useSelector(historyState)
  const { title } = accessPrePost.value


  const list = useSelector(listValue)
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTitle(e.target.value))
  }

  const removeTaskElement = (index: number) => {
    const newList = list.items.filter((_:any, ind:number) => ind !== index)
    dispatch(remove(newList))
    
  }

  useEffect(() => {
    if (isUploading) {
      dispatch(clearList())
      dispatch(updateTitle('New List'))
    }
  }, [isUploading])

  return (
    <div className="card w-1/4 rounded-md h-[30rem] flex flex-col p-10">
      <input value={title} className="w-full text-3xl text-white font-bold mb-2 bg-transparent focus:outline-none " onChange={(e) => handleTitleChange(e)} maxLength={30} placeholder="title"></input>
      {Object.values(list).length > 0 && list.map((item:Task, index:number) => (
      <p
        key={index}
        className="w-full text-left text-xl text-white py-[0.1rem] hover:cursor-pointer hover:text-red-700 hover:opacity-60 hover:italic transition-all"
        onClick={() => removeTaskElement(index)}
      >
        {item.items}
      </p>
    ))}
      <InputTask />
    </div>
  )
}

export default TaskItem