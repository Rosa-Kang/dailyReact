import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import  {Profile} from './pages/Profile';
import { Contact } from './pages/Contact';
import {QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();

const App = () => {
  const client = new QueryClient();
  const [username, setUsername] = useState('Rosa')

  return (
    <div className='App'>
      <QueryClientProvide>
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
      </QueryClientProvide>
    </div>
  )
}

export default App