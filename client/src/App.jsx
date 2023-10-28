import { Provider } from 'react-redux';
import store from "./app/store";
import TaskArea from "./components/TaskArea";
import TaskList from "./components/TaskList";
import "./index.css"

function App() {
  return <Provider store = {store}>
    <TaskArea/>
    <TaskList/>
  </Provider>
}

export default App;
