import React, {useState, useEffect} from 'react';


const App = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('component Mounted')

    return () => {
      console.log('Component Unmounted.')
    };
  }, [])

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value)
        }}
      />

      <h1>{text}</h1>
    </div>
  )
}

export default App;