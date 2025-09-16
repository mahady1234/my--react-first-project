import { use } from "react"


export default function Result({ fetchUser }) {
    const styleChange = {
        border: "2px solid yellow",
        padding: "5px",
        rounded: "10px"
    }
    let users = use(fetchUser)

    return (
        <div style={styleChange}>
            <h3>User:{users.length}</h3>
        </div>
    )
}