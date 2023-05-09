import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [string, setString] = useState('');

  const handleChange = (e) => {
    let value = e.target.value;
    setString(value);
  }

  return <div><input type="text" onChange={handleChange} />{string}</div>;
}
export default App;
