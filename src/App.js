import React, { useEffect, useState } from 'react';
import axios from 'axios';



const App = () => {
  const [catFact, setCatFact] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  
  const handleGenerate = () => {
    axios.get(`https://catfact.ninja/fact`).then((res) => {
      setCatFact(res.data.fact);
    });
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data?.age);
    })
  }

  useEffect(() => {
    handleGenerate();
    fetchData();
  }, [])

  return (
    <div className='App'>
      <div>
      <button onClick={handleGenerate}>Generate Cat Fact</button>
      <p>{catFact}</p> 
      </div>

      
      <input type="text" placeholder='Ex. Rosa..' onChange={handleChange} />
      <button onClick={fetchData}>Show</button>
      <h1>Predicted Age: { age }</h1>
    </div>
  )
}

export default App