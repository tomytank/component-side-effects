import React, { useState, useEffect } from "react";

//import MoviesList from "./components/MoviesList";
import logo from "./assets/logo.png";
import "./styles.css";

function App() {
  const [state, setState] = useState(0);
  const [otherState, setOtherState] = useState("dan");

  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  useEffect(() => {
    console.log("State count changed!");
  }, [state]);

  useEffect(() => {
    console.log("State Other Changed");
  }, [otherState]);

  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src={logo} alt="sudio ghibli official logo" />
        <h1>API</h1>
        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          {state} times
        </button>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0);
//   const [countLevel, setCountLevel] = useState("Low");

//   // useEffect(() => {
//   //   console.log("Component Mounted!")
//   // }, []);

//   useEffect(() => {
//     console.log("State count changed");
//     // 1- 5 is Low,
//     // 5- 15 is Medium
//     // 15+ is high
//     if (count < 6) {
//       // Do nothing
//     } else if (count > 5 && count < 16) {
//       setCountLevel("Medium");
//     } else {
//       setCountLevel("High");
//     }
//   }, [count]);

//   // useEffect(() => {
//   //   console.log("State Other changed")
//   // }, [countLevel])

//   // useEffect(() => {
//   //   console.log("Any state has changed")
//   // }, [countLevel, count])

//   return (
//     <div className="App">
//       <div className="logo_container">
//         <img className="logo" src={logo} alt="studio ghibli official logo" />
//         <h1>API</h1>
//         <h2>The count is: {countLevel}</h2>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           {count} times
//         </button>
//       </div>
//       <MoviesList />
//     </div>
//   );
// }

// export default App;
