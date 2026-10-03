import { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";

function Quiz() {

  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const question = questions[current];

  function nextQuestion() {

    // First click = check answer
    if (!submitted) {

      if (selectedAnswer === question.answer) {
        setScore((previousScore) => previousScore + 1);
      }

      setSubmitted(true);

      return;
    }

    // Second click = go to next question
    if (current === questions.length - 1) {

      const finalScore =
        score +
        (selectedAnswer === question.answer ? 0 : 0);

      navigate("/result", {
        state: {
          score: finalScore,
          total: questions.length
        }
      });

    } else {

      setCurrent(current + 1);
      setSelectedAnswer("");
      setSubmitted(false);

    }
  }

  return (
    <div className="quiz-page">

      <QuizHeader
        current={current + 1}
        total={questions.length}
      />

      <ProgressBar
        current={current + 1}
        total={questions.length}
      />

      <QuestionCard
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        submitted={submitted}
      />

      <button
        className="next-button"
        onClick={nextQuestion}
        disabled={!selectedAnswer}
      >
        {!submitted
          ? "Check Answer"
          : current === questions.length - 1
            ? "Finish Quiz"
            : "Next"}
      </button>

    </div>
  );
}

export default Quiz;