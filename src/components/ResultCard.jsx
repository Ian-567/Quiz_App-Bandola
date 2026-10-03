function ResultCard({ score, total }) {
  const percentage = Math.round(
    (score / total) * 100
  );

  return (
    <div className="result-card">

      <p>Quiz Completed</p>

      <h1>Your Score:</h1>

      <div className="score">
        {score} / {total}
      </div>

      <h3>
        Percentage: {percentage}%
      </h3>

    </div>
  );
}

export default ResultCard;