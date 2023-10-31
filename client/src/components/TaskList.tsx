import TaskHistory from "./TaskHistory"
import { useState, useEffect } from "react"
import { historyState, setFalse } from "./UpdateHistorySlice"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

interface TaskItem {
  key: string,
  title: string,
  tasks: string[]
}

const TaskList: React.FC = () => {
  const [taskList, setTaskList] = useState<TaskItem[]>([]);
  const historyValue = useSelector(historyState);
  const dispatch = useDispatch();

  const genUUID = () => {
    return Math.random() * 3000
  }

  useEffect(() => {
    if (historyValue.value) {
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
      <>
        {taskList.map((item) => (
          <TaskHistory key = {genUUID()} title={item.title} list={item.tasks} />
        ))}
      </>
    );
  } else {
    return <p>Loading tasks</p>;
  }
};

export default TaskList;
