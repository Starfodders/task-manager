import axios from "axios";
import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { prePostContents, updateTasks } from "./PostContentSlice";
import { setTrue } from "./UpdateHistorySlice";
import { listValue } from "./ListItemsSlice";
import ActiveTask from "./ActiveTask";
import { currentActive } from "./ActiveListSlice"

const TaskArea = () => {

  //get cookie for django
  const [beginPost, setBeginPost] = useState<Boolean>(false)
  const [renderActive, setRenderActive] = useState<Boolean>(false)

  const dispatch = useDispatch()
  const listObj = useSelector(prePostContents)
  const activeCard = useSelector(currentActive)
  
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
  axios.get('http://localhost:8000', { withCredentials: true })

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
      setBeginPost(false)

    }
  }, [beginPost])

  useEffect(() => {
    if (activeCard.value && Object.values(activeCard.value).length > 0) {
      setRenderActive(true)
    }
  }, [activeCard, renderActive])

  return (
    <div className='main-bg w-full min-h-[42rem] p-6 flex flex-col justify-between items-center'>
      <div className="w-full flex justify-center gap-10">
       <TaskItem />
        {renderActive && <ActiveTask newActive = {activeCard}/>}
      </div>
      <button onClick={() => submitList()} className="up-btn bg-[#f5cb5c] text-[white] px-6 py-4 uppercase mb-5">Upload</button>
    </div>
  )
}

export default TaskArea