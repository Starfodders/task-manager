import { useSelector } from "react-redux";
import {listValue} from "./ListItemsSlice"
import InputTask from "./InputTask";

const TaskItem = () => {

    const list: string[] = useSelector(listValue)

  return (
    <div>
        <h1 className='w-full'>Title</h1>
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