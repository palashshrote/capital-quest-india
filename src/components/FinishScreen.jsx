function FinishScreen({points, maxPossiblePoints, highScore, dispatch}) {
    const percentage = Math.floor(points/maxPossiblePoints*100);
    return (
        <div>
            <h2>Quiz ended</h2>
            <p className="result">
                You scored <strong>{points}</strong> out of {maxPossiblePoints} ({percentage}%)
            </p>
            <p className="highscore">Highscore : {highScore}</p>
            <button onClick={()=> dispatch({type: "restart"})}>Restart</button>
        </div>
    );
}

export default FinishScreen;