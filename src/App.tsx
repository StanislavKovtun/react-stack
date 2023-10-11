import { Routes, Route } from 'react-router';

import Main from './pages/Main'
import Contacts from './pages/Contacts'
import './App.css'

function App() {
  return (
    <div>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;