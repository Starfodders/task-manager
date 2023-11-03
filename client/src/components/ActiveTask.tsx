import { useSelector, useDispatch } from "react-redux"
import { currentActive, updateActive } from "./ActiveListSlice"
import { useState, useEffect } from "react"

interface renderProp {
    newActive: Boolean
}

interface Task {
    items: string,
    completed: boolean
  }

const ActiveTask: React.FC<renderProp> = ({ newActive }) => {

    const dispatch = useDispatch()
    const activeCard = useSelector(currentActive)
    const { title, id, tasks } = activeCard.value    
    

    const [completedTasks, setCompletedTasks] = useState(new Set<number>());

    const completeTaskElement = (index: number) => {
        setCompletedTasks(prev => {
            const newCompletedTasks = new Set(prev);
            newCompletedTasks.add(index);
            return newCompletedTasks;
        });
    };

    useEffect(() => {
        //when changing sets, reset the ones that have been marked complete
        setCompletedTasks(new Set<number>())
    }, [newActive])


    if (activeCard.value) {
        return (
            <div className="card w-1/4 rounded-md h-[30rem] flex flex-col p-10">
                <h1 className="w-full text-3xl text-white font-bold mb-2 text-left">{title}</h1>
                {tasks.map((item: Task, index: number) => {
                    const isCompleted = completedTasks.has(index);
                    return <p key={index} className={isCompleted ? "w-full text-left text-xl text-white py-[0.1rem] opacity-50 line-through pointer-events-none" : "w-full text-left text-xl text-white py-[0.1rem] hover:cursor-pointer hover:text-[#f5cb5c] transition-all"} onClick={() => completeTaskElement(index)}>{item.items}</p>
                })}
            </div>
        )
    }
    else {
        return null
    }
}

export default ActiveTask