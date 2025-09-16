export default function Friend({ user }) {
    const { name, email, body } = user;
    return (
        <div className="card">
            <h1>Name:{name}</h1>
            <p className="card">Email:{email}</p>
            <h6 className="card">Body:{body}</h6>
        </div>
    )
}