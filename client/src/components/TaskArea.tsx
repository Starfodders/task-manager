import axios from "axios";
import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { prePostContents, updateTasks } from "./PostContentSlice";
import { listValue } from "./ListItemsSlice";

//first update the state value to be included within the body
//then once this is updated, call a useEffect

const TaskArea = () => {

  const [beginPost, setBeginPost] = useState<Boolean>(false)
  
  const dispatch = useDispatch()
  const listObj = useSelector(prePostContents)
  const taskArray: string[] = useSelector(listValue)

  const submitList: () => void = () => {
    dispatch(updateTasks(taskArray))
    setBeginPost(true)
  }

  useEffect(() => {
    if (beginPost) {
      try {
        axios.post('http://localhost:8080/', {
          title: listObj.title,
          content: listObj.tasks
        })
        
      }catch(err) {
        console.error(err + ':Error submitting the post to backend');

      }
    }
  }, [beginPost])

  return (
    <div className='w-1/2 p-6 border-2 border-red-500 flex flex-col justify-between'>
      <TaskItem />
      <button onClick={() => submitList()}>Submit</button>
    </div>
  )
}

export default TaskArea