
interface itemProps {
  id: number,
  title: string,
  list: string[]
}

const TaskHistory: React.FC<itemProps> = ({ id, title, list }) => {    
  
  return (
    <div key={id} className="bg-white rounded-md min-h-[15rem] min-w-[10rem] p-4">
      <h1>{title}</h1>
      {list.map((task) => {
        return <p  className="text-sm">{task.slice(0, task.length)}</p>
      })}
    </div>
  )


}

export default TaskHistory