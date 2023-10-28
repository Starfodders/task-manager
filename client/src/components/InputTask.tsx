import {useState, useEffect} from 'react'

type AddTaskProp = {
    addTask : (task:string) => void
}

const InputTask: React.FC<AddTaskProp> = ({addTask}) => {

    const [inputValue, setInputValue] = useState<string>('')

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }

    function handleInput() {
        addTask(inputValue)
        setInputValue('')
    }


  return (
    <>
    <input value={inputValue} onChange = {(e) => handleChange(e)}></input>
    <button className='p-5 bg-blue-700 text-white' onClick = {() => handleInput()}>Add Task</button>
    </>
  )
}

export default InputTask