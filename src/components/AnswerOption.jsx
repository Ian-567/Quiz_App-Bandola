function AnswerOption({
  option,
  selectedAnswer,
  setSelectedAnswer,
  correctAnswer,
  submitted
}) {

  let className = "answer";

  if (submitted) {
    if (option === correctAnswer) {
      className += " correct-answer";
    }

    if (
      option === selectedAnswer &&
      option !== correctAnswer
    ) {
      className += " wrong-answer";
    }
  } else if (selectedAnswer === option) {
    className += " selected";
  }

  return (
    <label className={className}>

      <input
        type="radio"
        name="answer"
        checked={selectedAnswer === option}
        onChange={() => setSelectedAnswer(option)}
        disabled={submitted}
      />

      {option}

    </label>
  );
}

export default AnswerOption;