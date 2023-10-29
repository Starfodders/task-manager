import TaskItem from "./TaskItem";

const TaskArea = () => {

  return (
    <div className='w-1/2 p-6 border-2 border-red-500 flex flex-col justify-between'>
      <TaskItem />
      <button>Submit</button>
    </div>
  )
}

export default TaskArea