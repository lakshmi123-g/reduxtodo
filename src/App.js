import './App.css';
import { useSelector } from "react-redux"
import Todolist from './components/Todolist';
function App() {

  const state = useSelector((state) => ({ ...state }));
  console.log("state", state);
  return (
    <div className='App'>
      <Todolist />
    </div>
  )
}

export default App;
