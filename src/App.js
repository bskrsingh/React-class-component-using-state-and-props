import React,{useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {  
  const [ personsState, setPersonsState  ] = useState({
      person : [
        {name:"Bhaskar", age:26},
        {name:"Ashutosh", age:39},
        {name:"Akhilesh", age:40}
      ],
      otherState : 'Some other Value'
     });

console.log(personsState)

const switchNameHandler = () =>{
  console.log("switch name !");
  setPersonsState({
    person: [
      {name:"Bhaskar Singh", age:26},
      {name:"Ashutosh Sonnvanshi", age:39},
      {name:"Akhilesh Singh", age:40}
    ],
    otherState : personsState.otherState
  })
}

  return (
    <div className="App">
      <h1>Hello Learing React</h1>
      <button onClick={switchNameHandler}>Switch</button>
      <Person name={personsState.person[0].name} age={personsState.person[0].age} />
      <Person name={personsState.person[1].name} age={personsState.person[1].age}>My Hobbies is playing Games</Person>
      <Person name={personsState.person[2].name} age={personsState.person[2].age}/>
    </div>
  )
//return React.createElement("div", {className:'App'}, React.createElement("h1", null, "Hi I am comming"));
  }

export default App;