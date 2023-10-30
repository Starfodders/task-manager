import { useSelector, useDispatch } from 'react-redux'
import { update, inputValue } from "./InputSlice"
import {update as updateList} from "./ListItemsSlice"


const InputTask = () => {

    const input: string = useSelector(inputValue)
    const dispatch = useDispatch()

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(update(e.target.value))
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            dispatch(updateList(input))
            dispatch(update(''))            
        }
    }



    return (
        <div className='flex w-full justify-around'>
            <input value={input} onChange={(e) => handleChange(e)} onKeyDown = {(e) => handleKeyDown(e)}className='w-1/2 border-2 p-2'></input>
        </div>
    )
}

export default InputTask