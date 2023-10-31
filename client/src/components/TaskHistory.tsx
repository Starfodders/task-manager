
interface itemProps {
  title: string,
  list: string[]
}

const TaskHistory: React.FC<itemProps> = ({ title, list }) => {  
  // console.log(list);
  
  return (
    <div key={title} >
      <h1>{title}</h1>
      {list.map((task) => {
        return <p>{task.slice(0, task.length)}</p>
      })}
    </div>
  )


}

export default TaskHistory