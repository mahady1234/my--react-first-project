import './App.css'

export default function Member({ name }) {
    console.log(name)
    return (
        <div className='family'>
            <h3>Name:{name.Name}</h3>
            <h3>Age:{name.Age}</h3>
            <h3>Profession:{name.Profession}</h3>
        </div>
    )
}