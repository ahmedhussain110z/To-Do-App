import { useState } from "react";
import TaskInput from "./components/TaskInput";
import ProgressBar from "./components/ProgressBar";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build Todo App", completed: false },
  ]);

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  // Add task
  const addTask = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setInput("");
  };

  // Complete task
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const completed = tasks.filter((task) => task.completed).length;

  return (
    <div className="app">
      <div className="todo-container">

        <h1>TODO APP</h1>
        <p>Organize your everyday tasks</p>

        <TaskInput
          input={input}
          setInput={setInput}
          addTask={addTask}
        />

        <ProgressBar
          total={tasks.length}
          completed={completed}
        />

        <FilterButtons
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

      </div>
    </div>
  );
}

export default App;