import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    function AddCount() {
        let add = count + 1;
        setCount(add)
    }

    const styleChange = {
        border: "2px solid yellow",
        padding: "5px",
        rounded: "10px"
    }
    return (
        <div style={styleChange}>
            <h3>Count:{count}</h3>
            <button onClick={AddCount}>Add</button>
        </div>
    )
}