import './App.css';

function App() {

  const users = [
    { name: "Rosa", age: 21 },
    { name: "Chris", age: 22 },
    { name: "Pedro", age: 23 },
    
  ];


  return (
    <div className="App">
      <div>{users.map((user, index) => { 
        return <User key={ index } name={user.name} age={ user.age} />
      })}</div>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name} {props.age}</h1>
    </div>
    )
} 

export default App;
