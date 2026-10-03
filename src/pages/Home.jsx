import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-container">

        <p>Welcome to the</p>

        <h1>Frontend Quiz!</h1>

        <p>
          Test your knowledge about frontend development.
        </p>

        <button
          className="start-button"
          onClick={() => navigate("/quiz")}
        >
          Start Quiz
        </button>

      </div>
    </div>
  );
}

export default Home;