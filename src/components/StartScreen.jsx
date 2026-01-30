function StartScreen({totalQuestion, dispatch}) {
    return (
        <div className="start">
            <h2>Welcome to the React India Quiz</h2>
            <h3>{totalQuestion} to play</h3>
            <button className="btn btn-ui" onClick={()=>{dispatch({type: "start"})}}>Start</button>
        </div>
    );
}

export default StartScreen;