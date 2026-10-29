
import "./TaskItems.css";


function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="task-item">
      <span
        onClick={() => toggleTask(task.id)}
        className={task.completed ? "completed" : ""}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
