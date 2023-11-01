import TaskHistory from "./TaskHistory"
import { useState, useEffect } from "react"
import { historyState, setFalse } from "./UpdateHistorySlice"
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
          setTaskList(res.data);
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
      <div className="flex justify-center p-4 gap-10">
        {taskList.map((item, index) => (
          <TaskHistory id = {index} title={item.title} list={item.tasks} />
        ))}
      </div>
    );
  } else {
    return <p>No Previous Tasks to Show</p>;
  }
};

export default TaskList;
