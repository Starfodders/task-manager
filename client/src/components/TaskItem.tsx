import { useSelector } from "react-redux";
import {listValue} from "./ListItemsSlice"

const TaskItem = () => {

    const list: string[] = useSelector(listValue)

  return (
    <div className='w-36 p-2 border-2 border-red-500 flex flex-col justify-between'>
        <h1 className='w-full'>Title</h1>
        {list.map((item) => {
            if (list.length > 0) {
                return <p key = {item}>{item}</p>
            }
        })}
    </div>
  )
}

export default TaskItem