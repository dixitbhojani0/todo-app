import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./components/About";

function App() {
  let days = ['Sunday 🖖', 'Monday 💪😀', 'Tuesday 😜', 'Wednesday 😌☕️', 'Thursday 🤗', 'Friday 🍻', 'Saturday 😴'];
  let d = new Date();
  let dayName = days[d.getDay()];
  var randomWordArray = Array(
    "Oh my, it's ",
    "Whoop, it's ",
    "Happy ",
    "Seems it's ",
    "Awesome, it's ",
    "Have a nice ",
    "Happy fabulous ",
    "Enjoy your "
  );
  const random = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<TodoContainer randomDay={random} randomDayName={dayName} />}/>
            <Route exact path="/about" element={<About />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
