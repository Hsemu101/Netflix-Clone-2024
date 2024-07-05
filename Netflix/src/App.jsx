import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import "./assets/App.css"
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
    {/* <Router> */}
      <Home />
      {/* </Router> */}
    </div>
  );
}

export default App

