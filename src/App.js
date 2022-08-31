//Import react related stuff
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Import components
import './App.css';
import NavBar from './Components/NavBar';

//Import views
import Home from './Pages/Home';
import Token from './Pages/Token';



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/tokens' element={<Token/>} />
        </Routes>
      </Router>
    </>
  )
}


export default App;