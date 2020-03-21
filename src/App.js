import React, { useState, useEffect } from "react";

//import MoviesList from "./components/MoviesList";
import logo from "./assets/logo.png";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [countLevel, setCountLevel] = useState("Low");

  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  useEffect(() => {
    console.log("State count changed!");
    //1-5 is low
    //5-15 is medium
    //15+ is high
    if (count < 6) {
      //do nothing
    } else if (count > 5 && count < 15) {
      setCountLevel("Medium");
    } else {
      setCountLevel("High");
    }
  }, [count]);

  useEffect(() => {
    console.log("State countLevel Changed");
  }, [countLevel]);

  // useEffect(() => {
  //   console.log("ANY state changes");
  // }, [countLevel, count]);

  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src={logo} alt="sudio ghibli official logo" />
        <h1>API</h1>
        <h2>The count is: {countLevel}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count} times
        </button>
      </div>
    </div>
  );
}

export default App;
