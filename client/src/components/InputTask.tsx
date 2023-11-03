import { useSelector, useDispatch } from 'react-redux'
import { update, inputValue } from "./InputSlice"
import {update as updateList} from "./ListItemsSlice"
import { useEffect } from 'react'
import { historyState } from "./UpdateHistorySlice"



const InputTask = () => {

    const input: string = useSelector(inputValue)
    const isUploading = useSelector(historyState)
    const dispatch = useDispatch()

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(update(e.target.value))
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            dispatch(updateList({'items': input, 'complete' : false}))
            dispatch(update(''))            
        }
    }

    useEffect(() => {
        if (isUploading) {
            dispatch(update(''))
        }
      }, [isUploading])



    return (
        <div className='flex w-full'>
            <input value={input} onChange={(e) => handleChange(e)} onKeyDown = {(e) => handleKeyDown(e)} className='w-full px-2 py-1 mt-[0.5rem] text-xl rounded-md bg-[#ffffff] opacity-50 focus:outline-none '></input>
        </div>
    )
}

export default InputTask