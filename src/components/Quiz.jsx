import { useEffect, useReducer } from "react";
import Header from "./Header";
import StartScreen from "./StartScreen";
import Main from "./Main";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
import Questions from "./Questions";

const initialState = {
  questions: [],
  options: [],
  status: "loading",
  index: 0,
  points: 0,
  answer: null,
  highScore: 0,
  timeRemaining: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "nextQuestion":
      return {
        ...state,
        answer: null,
        index: state.index + 1,
      };
    case "restart":
      return {
        ...state,
        status: "active",
        index: 0,
        points: 0,
        answer: null
      }
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "newAnswer": 
      return {
        ...state,
        points: action.payload === state.questions[state.index].capital ? state.points+10 : state.points,
        answer: null,
        index: state.index + 1
      }
  }
}

function Quiz() {
  const [{ questions, status, index, answer,points, highScore }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:3001/questions`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (e) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchData();
  }, []);

  const numQuestions = questions.length;
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "ready" && (
          <StartScreen totalQuestion={numQuestions} dispatch={dispatch} />
        )}
        {/* {status === "active" && <h3>Capital of {questions[index].state}</h3>} */}
        {status === "active" && (
          <Questions  
            questions={questions}
            dispatch={dispatch}
            numQuestions={numQuestions}
            index={index}
            answer={answer}
          />
        )}
        {status === "finished" && <FinishScreen points={points} maxPossiblePoints={10*numQuestions} highScore={highScore} dispatch={dispatch} />}
      </Main>
    </div>
  );
}

export default Quiz;
