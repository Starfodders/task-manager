import { Provider } from 'react-redux';
import store from "./app/store";
import TaskArea from "./components/TaskArea";
import TaskList from "./components/TaskList";
import "./index.css"
import Header from './components/Header';

function App() {

  return <Provider store = {store}>
    <Header/>
    <TaskArea/>
    <TaskList/>
  </Provider>
}

export default App;
