import './App.css'
import Food from './Hungry'
import Actor from './Actor'
import Member from './Member';
import Books from './Book';
import Counter from './Count';
import Cricket from './Cricket';
import Bowler from './Bolling'
import Match from './Play'
import Result from './Rumi'
import { Suspense } from 'react';
import Friends from './Friends';
import Players from './Players';

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments")
  return res.json();
}
// const fetchData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   return res.json();
// }
// const fetchData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   return res.json();
// }

function App() {

  const fetchFriends = fetchData()
  const actors = ["Bappa Raj", "Salman Shah", "Manna", "Omar Sani", "Anwar", "Jasim", "Bappa Raj", "Salman Shah", "Manna", "Omar Sani", "Anwar", "Jasim"];

  const family = [
    { Id: "1", Name: 'Mahady', Age: '21', Profession: 'Web-developer' },
    { Id: "2", Name: 'Nusrat', Age: '19', Profession: 'Teacher' },
    { Id: "3", Name: 'Ammu', Age: '45', Profession: 'House-wife' },
  ]

  const books = [
    { id: "1", Name: "Physics", Price: "390" },
    { id: "2", Name: "Chemistry", Price: "450" },
    { id: "3", Name: "Biology", Price: "250" },
    { id: "4", Name: "HigherMath", Price: "320" },
    { id: "5", Name: "ICT", Price: "200" },
  ]

  function handleClick() {
    alert("Button clicked one")
  }

  const handleClick2 = () => {
    alert("Button clicked 2")
  }


  function handleClick5(num) {
    const sum = num + 5;
    alert("the sum" + sum)
  }

  const time = "50";
  return (
    <>
      <h1>Vite + React</h1>

      <Players></Players>

      <Suspense fallback={<h3>Friends are coming for treat......</h3>}>
        <Friends fetchFriends={fetchFriends}></Friends>
      </Suspense>



      <Suspense fallback={<h3>Loading data ......</h3>}>
        <Result fetchUser={fetchUser}></Result>
      </Suspense>

      <Match></Match>

      <Bowler></Bowler>

      <Cricket></Cricket>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me 1</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={function handleClick() {
        alert("Button clicked three")
      }}>Click Me 3</button>
      <button onClick={() => { alert("Button clicked four") }}>Click Me 4</button>
      <button onClick={() => handleClick5(100)}>Click Me 5</button>




      <Books name={books}></Books>

      {
        actors.map(actor => <Actor props={actor}></Actor>)
      }

      {
        family.map(member => <Member key={member.id} name={member}></Member>)
      }


      <Food item="Burger" isHungry={true} need="Yes" time={time}></Food>
      <Food item="Soup" isHungry={false} need="No" time=""></Food>
      <Food item="Rice" isHungry={true} need="Yes" time={time}></Food>
      <Person></Person>
      <Person2></Person2>
      <Person></Person>
      <Developer name="Rumi" age="21" skill="Web-developer"></Developer>
      <Developer name="Nusrat" age="19" skill="Teacher"></Developer>
      <Player name="Rumi" age="21" ></Player>
      <Player name="Nusrat" skill="Bolling"></Player>
    </>
  )
}

function Player({ name, age = 0, skill = 0 }) {

  const personStyle = {
    color: "green",
    border: "5px solid green",
    borderRadius: "10px",
    padding: "2px"
  }
  return (
    <div className='developer'>
      <h3 style={{
        color: "red",
        fontSize: "24px",

      }} >Name:{name}</h3>
      <h3 style={personStyle}>Age:{age}</h3>
      <h3 style={personStyle}>Skill:{skill}</h3>
    </div>
  )
}



function Person() {
  const name = "Rumi";
  const age = 21;
  return (
    <p> This is {name} and I am {age} years old </p >
  )
}
function Person2() {
  const name = "Rumi";
  const name1 = "Nusrat";
  const age = 19;
  return (
    <p> This is {name1} and I am {age} years old and My husband name is {name} </p >
  )
}


function Developer(prompt) {
  console.log(prompt)
  const personStyle = {
    color: "green",
    border: "5px solid green",
    borderRadius: "10px",
    padding: "2px"
  }
  return (
    <div className='developer'>
      <h3 style={{
        color: "red",
        fontSize: "24px",

      }} >Name:{prompt.name}</h3>
      <h3 style={personStyle}>Age:{prompt.age}</h3>
      <h3 style={personStyle}>Skill:{prompt.skill}</h3>
    </div>
  )
}

export default App
