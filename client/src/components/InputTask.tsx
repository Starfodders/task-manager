import { useSelector, useDispatch } from 'react-redux'
import { update, inputValue } from "./InputSlice"
import {update as updateList} from "./ListItemsSlice"


const InputTask = () => {

    const input: string = useSelector(inputValue)
    const dispatch = useDispatch()

    function handleChange2(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(update(e.target.value))
    }

    function handleInput() {
        dispatch(updateList(input))
        dispatch(update(''))
    }


    return (
        <>
            <input value={input} onChange={(e) => handleChange2(e)}></input>
            <button className='p-5 bg-blue-700 text-white' onClick = {() => handleInput()}>Add Task</button>
        </>
    )
}

export default InputTask