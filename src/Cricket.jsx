import { useState } from "react"

export default function Cricket() {
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)



    function HandleSingle() {
        let totalRun = runs + 1;
        setRuns(totalRun)
    }
    function HandleDoubleSingle() {
        let totalRun = runs + 2;
        setRuns(totalRun)
    }
    function HandleFour() {
        let totalRun = runs + 4;
        setRuns(totalRun)
    }
    function HandleSix() {
        let totalRun = runs + 6;
        let sixCount = sixes + 1;
        setSixes(sixCount)
        setRuns(totalRun)
    }
    return (
        <div>
            <h3>Batting is running</h3>
            <h3>Total Six:{sixes}</h3>

            {
                runs >= 50 && <h3>Half Cencury Complete</h3>
            }
            {
                runs >= 100 && <h3>Cencury Complete</h3>
            }
            {
                runs >= 200 && <h3>Double Cencury Complete</h3>
            }
            <h1>Score:{runs}</h1>



            <button onClick={HandleSingle}>Single</button>
            <button onClick={HandleDoubleSingle}>Double Single</button>
            <button onClick={HandleFour}>Four</button>
            <button onClick={HandleSix}> Six</button>
        </div>
    )
}