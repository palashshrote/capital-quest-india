function Progress({ index, numQuestions, points, totalPoints, answer }) {
  return (
    <div className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <div className="stats">
        <p>
          Question <strong>{index + 1}</strong>/{numQuestions}
        </p>
        <p>
          <strong>{points}</strong>/{totalPoints}
        </p>
      </div>
    </div>
  );
}

export default Progress;
