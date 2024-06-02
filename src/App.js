import './App.css';
import Navbar from './components/navbar/navbar.js';
import HomePage from './components/layout/HomePage';
import SearchPage from './components/layout/SearchPage';
import Login from './components/FromAcc/login/Login'
import Hello from './components/video/video';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
        <div className="App">
          <BrowserRouter>
             <Navbar/>
              <Routes>
               <Route  path="/home" element={<HomePage/>} />
               <Route path="/search" element={<SearchPage/>}/>
               <Route path="/" element={<Login/>}/>
               <Route path="/movieMM" element={<Hello/>}/>
             </Routes>
          </BrowserRouter>
         </div>
  );
}

export default App;
