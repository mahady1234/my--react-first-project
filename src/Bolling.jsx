import { useState } from "react";

export default function Bowler() {
    const [balls, setBalls] = useState(0);
    const [overs, setOvers] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [runsGiven, setRunsGiven] = useState(0);


    function bowlBall(run) {
        let newBalls = balls + 1;
        let newRuns = runsGiven + run;


        if (newBalls === 6) {
            setOvers(overs + 1);
            setBalls(0);
        } else {
            setBalls(newBalls);
        }

        setRunsGiven(newRuns);
    }


    function takeWicket() {
        let addWicket = wickets + 1;
        setWickets(addWicket);
        let newBalls = balls + 1;

        if (newBalls === 6) {
            setOvers(overs + 1);
            setBalls(0);
        } else {
            setBalls(newBalls);
        }
    }

    return (
        <div>
            <h2>Bowling is running</h2>
            <h3>Overs: {overs}.{balls}</h3>
            <h3>Wickets: {wickets}</h3>
            <h3>Runs Given: {runsGiven}</h3>

            <button onClick={() => bowlBall(0)}>Dot Ball</button>
            <button onClick={() => bowlBall(1)}>1 Run</button>
            <button onClick={() => bowlBall(2)}>2 Runs</button>
            <button onClick={() => bowlBall(4)}>Four</button>
            <button onClick={() => bowlBall(6)}>Six</button>
            <button onClick={takeWicket}>Wicket</button>
        </div>
    );
}
