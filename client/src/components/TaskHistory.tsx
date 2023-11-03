import { useSelector, useDispatch } from "react-redux"
import { currentActive, updateActive } from "./ActiveListSlice"

interface Task {
  items: string,
  completed: boolean
}

interface itemProps {
  key: React.Key,
  id: String,
  title: string,
  list: Task[]
}

const TaskHistory: React.FC<itemProps> = ({ key, id, title, list }) => {
  console.log(list);
  

  const dispatch = useDispatch()
  const active = useSelector(currentActive)
  const active_id = active.value.id;

  const changeActive = () => {
    dispatch(updateActive({ id, title, tasks: list }))
  }

  return (
    <div key={key} className={active_id === id ? "bg-white rounded-md min-h-[15rem] min-w-[10rem] p-4 relative border-4 border-[#f5cb5c]" : "bg-white rounded-md min-h-[15rem] min-w-[10rem] p-4 relative"} onClick={() => changeActive()} >
      <p className="absolute -top-2 -left-2 rounded-[50%] bg-white py-1.5 px-3 text-sm">{id}</p>
      <h1>{title}</h1>
      {list.map((task: Task) => {
        return <p className="text-sm">{task.items}</p>
      })}
    </div>
  )


}

export default TaskHistory