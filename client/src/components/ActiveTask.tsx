import { useSelector, useDispatch } from "react-redux"
import { currentActive, updateActive } from "./ActiveListSlice"
import { useState, useEffect } from "react"
import axios from "axios"

interface renderProp {
    newActive: Boolean
}

interface Task {
    items: string,
    complete: boolean
  }

const ActiveTask: React.FC<renderProp> = ({ newActive }) => {

    const dispatch = useDispatch()
    const activeCard = useSelector(currentActive)
    const [completeCard, setCompleteCard] = useState<boolean>(false)
    const { title, id, tasks } = activeCard.value   

    const completeTaskElement = (index: number) => {
        const updateTasks = [...tasks]

        updateTasks[index] = {
            ...updateTasks[index],
            complete: true
        };

        dispatch(updateActive({id, title, tasks: updateTasks}))
    };

    useEffect(() => {        
        const allComplete = tasks.every((task: Task) => task.complete)
        if (allComplete) {
            setCompleteCard(true)
        }

    }, [newActive])



    if (activeCard.value) {
        return (
            <div className={completeCard ? "card w-1/4 rounded-md h-[30rem] flex flex-col p-10 opacity-50" : "card w-1/4 rounded-md h-[30rem] flex flex-col p-10"}>
                <h1 className="w-full text-3xl text-white font-bold mb-2 text-left">{title}</h1>
                {tasks.map((item: Task, index: number) => {
                    return <p key={index} className={item.complete ? "w-full text-left text-xl text-white py-[0.1rem] opacity-50 line-through pointer-events-none" : "w-full text-left text-xl text-white py-[0.1rem] hover:cursor-pointer hover:text-[#f5cb5c] transition-all"} onClick={() => completeTaskElement(index)}>{item.items}</p>
                })}
            </div>
        )
    }
    else {
        return null
    }
}

export default ActiveTask