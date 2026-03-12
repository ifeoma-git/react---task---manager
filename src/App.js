import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if(taskInput.trim() === "") return;

    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{padding:"20px"}}>
      <h1>Task Manager</h1>

      <input
        type="text"
        value={taskInput}
        onChange={(e)=>setTaskInput(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task,index)=>(
          <li key={index}>
            {task}
            <button onClick={()=>deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;