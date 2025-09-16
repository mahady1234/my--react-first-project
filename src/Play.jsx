import { useState } from "react"

export default function Match() {
    return (
        <div>
            <h1>🏏 Cricket Match Simulator</h1>
            <Cricket />
            <Bowler />
        </div>
    )
}

// === BATTING COMPONENT ===
function Cricket() {
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)

    function HandleSingle() {
        setRuns(runs + 1)
    }
    function HandleDoubleSingle() {
        setRuns(runs + 2)
    }
    function HandleFour() {
        setRuns(runs + 4)
    }
    function HandleSix() {
        setSixes(sixes + 1)
        setRuns(runs + 6)
    }

    return (
        <div style={{ border: "2px solid green", margin: "10px", padding: "10px" }}>
            <h2>Batting Scoreboard</h2>
            <h3>Total Runs: {runs}</h3>
            <h3>Total Sixes: {sixes}</h3>

            {runs >= 50 && <h3>🎉 Half Century!</h3>}
            {runs >= 100 && <h3>🏆 Century!</h3>}

            <button onClick={HandleSingle}>Single</button>
            <button onClick={HandleDoubleSingle}>Double</button>
            <button onClick={HandleFour}>Four</button>
            <button onClick={HandleSix}>Six</button>
        </div>
    )
}

// === BOWLING COMPONENT ===
function Bowler() {
    const [balls, setBalls] = useState(0)
    const [overs, setOvers] = useState(0)
    const [runsGiven, setRunsGiven] = useState(0)
    const [wickets, setWickets] = useState(0)

    function bowlBall(run) {
        let newBalls = balls + 1
        let newRuns = runsGiven + run

        if (newBalls === 6) {
            setOvers(overs + 1)
            setBalls(0)
        } else {
            setBalls(newBalls)
        }

        setRunsGiven(newRuns)
    }

    function takeWicket() {
        setWickets(wickets + 1)
        let newBalls = balls + 1
        if (newBalls === 6) {
            setOvers(overs + 1)
            setBalls(0)
        } else {
            setBalls(newBalls)
        }
    }

    return (
        <div style={{ border: "2px solid red", margin: "10px", padding: "10px" }}>
            <h2>Bowling Scoreboard</h2>
            <h3>Overs: {overs}.{balls}</h3>
            <h3>Runs Given: {runsGiven}</h3>
            <h3>Wickets: {wickets}</h3>

            <button onClick={() => bowlBall(0)}>Dot Ball</button>
            <button onClick={() => bowlBall(1)}>1 Run</button>
            <button onClick={() => bowlBall(2)}>2 Runs</button>
            <button onClick={() => bowlBall(4)}>Four</button>
            <button onClick={() => bowlBall(6)}>Six</button>
            <button onClick={takeWicket}>Wicket</button>
        </div>
    )
}
