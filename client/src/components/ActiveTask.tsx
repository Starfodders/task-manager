import { useSelector } from "react-redux"
import { currentActive } from "./ActiveListSlice"

const ActiveTask = () => {

    const activeCard = useSelector(currentActive)    
    const { title, id, tasks } = activeCard.value
    

    if (activeCard.value) {
        return (
            <div className="card w-1/4 rounded-md h-[30rem] flex flex-col p-10">
                <h1 className="w-full text-3xl text-white font-bold mb-2 text-left">{title}</h1>
                {tasks.map((item: string, index: number) => {
                    return <p key={index} className="w-full text-left text-xl text-white py-[0.1rem]">{item}</p>
                })}
            </div>
        )
    }
    else {
        return null
    }
}

export default ActiveTask