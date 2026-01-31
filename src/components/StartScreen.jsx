function StartScreen({totalQuestion, dispatch}) {
    return (
        <div>
            {/* <h2>Welcome to the Capital Quest India</h2> */}
            <h2>{totalQuestion} questions to play</h2>
            <button className="btn btn-ui" onClick={()=>{dispatch({type: "start"})}}>Start</button>
        </div>
    );
}

export default StartScreen;