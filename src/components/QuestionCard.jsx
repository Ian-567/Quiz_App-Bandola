import AnswerOption from "./AnswerOption";

function QuestionCard({
  question,
  selectedAnswer,
  setSelectedAnswer,
  submitted
}) {
  return (
    <div className="question-card">

      <h2>Question {question.id}</h2>

      <h3>{question.question}</h3>

      <div className="answers">
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            correctAnswer={question.answer}
            submitted={submitted}
          />
        ))}
      </div>

      {submitted && (
        <div
          className={
            selectedAnswer === question.answer
              ? "feedback correct"
              : "feedback wrong"
          }
        >
          {selectedAnswer === question.answer
            ? "✓ Correct!"
            : `✗ Wrong! Correct answer: ${question.answer}`}
        </div>
      )}

    </div>
  );
}

export default QuestionCard;