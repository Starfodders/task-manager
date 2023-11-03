import TaskHistory from "./TaskHistory"
import { useState, useEffect } from "react"
import { historyState, setFalse } from "./UpdateHistorySlice"
import { updateActive } from "./ActiveListSlice"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

interface TaskItem {
  id: string,
  title: string,
  tasks: string[]
}

const TaskList: React.FC = () => {
  const [taskList, setTaskList] = useState<TaskItem[]>([]);
  const historyValue = useSelector(historyState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (historyValue) {      
      
      const updateList = async () => {
        try {
          const res = await axios.get('http://localhost:8000/update/');          
          const sorted = res.data.sort((a:TaskItem , b: TaskItem) => Number(a.id) - Number(b.id))      
          dispatch(updateActive(sorted[sorted.length - 1])) //set the most recent list to the active list
          setTaskList(sorted);
        } catch (err) {
          console.error(err + ':Error calling endpoint update at localhost');
        }
      };
      updateList();
      dispatch(setFalse());      
      
    }
  }, [historyValue, dispatch]);

  if (taskList.length > 0) {
    return (
      <div className="flex justify-center p-4 gap-10 overflow-hidden">
        {taskList.map((item) => (
          <TaskHistory key = {item.id} id = {item.id} title={item.title} list={item.tasks} />
        ))}
      </div>
    );
  } else {
    return <p>No Previous Tasks to Show</p>;
  }
};

export default TaskList;
