function FinishScreen({points, maxPossiblePoints, highScore, dispatch}) {
    return (
        <div>
            <h2>Quiz ended</h2>
            <p className="result">
                You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.floor(points/maxPossiblePoints*100)}%)
            </p>
            <p className="highscore">Highscore : {highScore}</p>
            <button onClick={()=> dispatch({type: "restart"})}>Restart</button>

        </div>
    );
}

export default FinishScreen;