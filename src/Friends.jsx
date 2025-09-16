import { use } from "react"
import Friend from "./Frnd"

export default function Friends({ fetchFriends }) {
    const fetchUser = use(fetchFriends)
    console.log(fetchUser)
    return (
        <div className="card">
            <h3>Friends:{fetchUser.length}</h3>
            {
                fetchUser.map(user => <Friend id={user.id} user={user}></Friend>)
            }
        </div>
    )
}