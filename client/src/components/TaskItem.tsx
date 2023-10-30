import { useSelector, useDispatch } from "react-redux";
import { updateTitle } from "./PostContentSlice";
import {listValue} from "./ListItemsSlice"
import { prePostContents } from "./PostContentSlice";
import InputTask from "./InputTask";
import React from "react";

const TaskItem = () => {

  const dispatch = useDispatch()
  const accessPrePost = useSelector(prePostContents)
  const {title} = accessPrePost.value
    

  const list: string[] = useSelector(listValue)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTitle(e.target.value))
  }

  return (
    <div>
      <input value = {title} className="w-1/2 border-2 text-xl font-bold" onChange = {(e) => handleTitleChange(e)}></input>
        {list.map((item) => {
            if (list.length > 0) {
                return <p key = {item}>{item}</p>
            }
        })}
        <InputTask/>
    </div>
  )
}

export default TaskItem