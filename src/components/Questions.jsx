import NextButton from "./NextButton";

function Questions({ questions, dispatch, numQuestions, index, answer }) {
  let optionIndices = randomOptionIndices(numQuestions, index);
  const lastQuestion = index === numQuestions - 1;
  optionIndices = [...optionIndices, index];
  optionIndices.sort((a, b) => a - b);
  console.log(optionIndices);

  const capitals = optionIndices.map(i => questions[i].capital);
  console.log(capitals);
// console.log(questions[index].capital);
//   const capitals = optionIndices.map(i => questions[i].capital);
//   console.log(capitals);    
  return (
    <div>
      <h4>Capital of {questions[index].state}</h4>
      <div className="options">
        {capitals.map((capital, i) => (
          <button onClick={()=>{ lastQuestion ? dispatch({type: "finish"}) : dispatch({type: "newAnswer", payload: capital}) }} key={i}>{capital}</button>
        ))}
      </div>
      <NextButton
        numQuestions={numQuestions}
        index={index}
        dispatch={dispatch}
        answer = {answer}
      />
    </div>
  );
}
function randomOptionIndices(n, x, count = 3) {
  const numbers = [];

  for (let i = 0; i < n; i++) {
    if (i !== x) numbers.push(i);
  }

  const result = new Set();

  while (result.size < count) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result.add(numbers[randomIndex]);
  }

  return [...result];
}
export default Questions;
