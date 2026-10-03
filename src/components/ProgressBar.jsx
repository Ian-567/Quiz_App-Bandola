function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="progress-container">
      <div
        className="progress"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;