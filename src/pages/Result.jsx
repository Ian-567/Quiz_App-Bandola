import { useNavigate, useLocation } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const score = location.state?.score || 0;
  const total = location.state?.total || 5;

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="result-page">
      <div className="result-card">

        <p className="completed-text">
          Quiz Completed
        </p>

        <h1>Your Score:</h1>

        <div className="score-box">
          {score} / {total}
        </div>

        <h2>
          Percentage: {percentage}%
        </h2>

        <div className="result-buttons">

          <button
            className="result-button"
            onClick={() => navigate("/quiz")}
          >
            Retake Quiz
          </button>

          <button
            className="result-button"
            onClick={() => navigate("/")}
          >
            Return Home
          </button>

        </div>

      </div>
    </div>
  );
}

export default Result;