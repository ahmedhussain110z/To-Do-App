
import "./TaskInput.css";

function TaskInput({ input, setInput, addTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(e);
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Enter a new task"
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default TaskInput;