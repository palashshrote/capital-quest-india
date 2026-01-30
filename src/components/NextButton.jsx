function NextButton({ numQuestions, index, dispatch, answer }) {
  const lastQuestion = index === numQuestions - 1;
  if(answer === null) return;
  return (
    <div>
      <button onClick={function() {
        if(lastQuestion) dispatch({type: "finish"});
        else dispatch({type: "nextQuestion"})
      }}>
        {lastQuestion ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default NextButton;
