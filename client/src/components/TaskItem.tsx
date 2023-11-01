import { useSelector, useDispatch } from "react-redux";
import { listValue, clearList } from "./ListItemsSlice"
import { prePostContents, updateTitle } from "./PostContentSlice";
import { historyState } from "./UpdateHistorySlice"
import InputTask from "./InputTask";
import React, { useEffect } from "react";

const TaskItem = () => {

  const dispatch = useDispatch()
  const accessPrePost = useSelector(prePostContents)
  const isUploading = useSelector(historyState)
  const { title } = accessPrePost.value


  const list: string[] = useSelector(listValue)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTitle(e.target.value))
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
      {list.map((item) => {
        if (list.length > 0) {
          return <p key={item} className="w-full text-left text-xl text-white py-[0.1rem]">{item}</p>
        }
      })}
      <InputTask />
    </div>
  )
}

export default TaskItem