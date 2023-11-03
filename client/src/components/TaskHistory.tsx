import { useSelector, useDispatch } from "react-redux"
import { currentActive, updateActive } from "./ActiveListSlice"

interface itemProps {
  key: React.Key,
  id: String,
  title: string,
  list: string[]
}

const TaskHistory: React.FC<itemProps> = ({ key, id, title, list }) => {

  const dispatch = useDispatch()
  const active = useSelector(currentActive)
  const active_id = active.value.id;

  const changeActive = () => {
    dispatch(updateActive({ id, title, tasks: list }))
  }

  return (
    <div key={key} className={active_id === id ? "bg-white rounded-md min-h-[15rem] min-w-[10rem] p-4 relative border-4 border-blue-600" : "bg-white rounded-md min-h-[15rem] min-w-[10rem] p-4 relative"} onClick={() => changeActive()} >
      <p className="absolute -top-2 -left-2 rounded-[50%] bg-white py-1.5 px-3 text-sm">{id}</p>
      <h1>{title}</h1>
      {list.map((task) => {
        return <p className="text-sm">{task.slice(0, task.length)}</p>
      })}
    </div>
  )


}

export default TaskHistory