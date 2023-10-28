import React from 'react'

type TaskItemProps = {
    list: string[];
  };

const TaskItem: React.FC<TaskItemProps> = ({list}) => {
  return (
    <div className='w-36 p-2 border-2 border-red-500 flex flex-col justify-between'>
        <h1 className='w-full'>Title</h1>
        {list.map((item) => {
            return <p key = {item}>{item}</p>
        })}
    </div>
  )
}

export default TaskItem