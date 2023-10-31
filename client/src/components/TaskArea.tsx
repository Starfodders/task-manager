import axios from "axios";
import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { prePostContents, updateTasks } from "./PostContentSlice";
import { setTrue } from "./UpdateHistorySlice";
import { listValue } from "./ListItemsSlice";


const TaskArea = () => {

  //get cookie for django
  axios.get('http://localhost:8000', { withCredentials: true })

  const [beginPost, setBeginPost] = useState<Boolean>(false)

  const dispatch = useDispatch()
  const listObj = useSelector(prePostContents)
  const taskArray: string[] = useSelector(listValue)

  const submitList: () => void = () => {

    //update state to send
    dispatch(updateTasks(taskArray))
    setBeginPost(true)

  }

  const getCSRFToken = (token: string) => {
    const split = token.split('=')
    const [name, value] = split
    if (name === 'csrftoken') {
      return value
    }
  }

  useEffect(() => {
    if (beginPost) {
      const token = getCSRFToken(document.cookie)
      const sendPost = async () => {
        try {
          await axios.post('http://localhost:8000/new/', {
            title: listObj.value.title,
            content: listObj.value.tasks
          }, { headers: { 'X-CSRFToken': token }, withCredentials: true })
        }
        catch (err) {
          console.error(err + ':Error submitting the post to backend');
        }
      }      
      sendPost()
      dispatch(setTrue())

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