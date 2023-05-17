import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import  {Profile} from './pages/Profile';
import { Contact } from './pages/Contact';

export const AppContext = createContext();

const App = () => {
  const [username, setUsername] = useState('Rosa')

  return (
    <div className='App'>
      <AppContext.Provider value={{ username, setUsername }}>
        
      <Router>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App