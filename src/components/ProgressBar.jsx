import "./ProgressBar.css";

function ProgressBar({ total, completed }) {
  const percentage =
    total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="progress">
      <p>
        {completed} of {total} tasks completed
      </p>

      <div className="progress-bg">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;