import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const timer = useRef(null);
  // const [timer, setTimer] = useState(null); we could have done this, but this causes 1 extra re-render when we set the Timer in StartClock function

  //We use useRef so updating the timer value does NOT cause component re-renders

  function StartClock() {
    //  timer.current holds the interval ID, not "timer" itself
    if (timer.current !== null) return; // prevents multiple intervals from being created

    let newTimer = setInterval(() => {
      setCount((count) => count + 1); // Safe state update
    }, 1000);
    timer.current = newTimer;
    //setTimer(newTimer); Here the extra re-render happens because the timer state changes
  }

  function StopTimer() {
    clearInterval(timer.current); // Clears the current interval
    timer.current = null; // set the current reference to null
    //setTimer(null);
  }
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f3f4f6",
    padding: "20px",
    width: "300px",
    margin: "50px auto",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const buttonStyle = {
    padding: "10px 18px",
    fontSize: "16px",
    margin: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#2563eb",
    color: "white",
  };

  const stopBtnStyle = {
    ...buttonStyle,
    backgroundColor: "#dc2626",
  };

  const timerStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#111827",
  };

  return (
    <div style={containerStyle}>
      <p style={timerStyle}>⏱ Timer: {count}</p>

      <button style={buttonStyle} onClick={StartClock}>
        Start
      </button>

      <button style={stopBtnStyle} onClick={StopTimer}>
        Stop
      </button>
    </div>
  );
}

export default App;

/*
  Why NOT run setInterval directly inside the component?
  -----------------------------------------------------
  Because every time state updates (setCount → re-render), the component function runs again.
  If setInterval were placed in the component body, a NEW interval would be created on each render
  → leading to multiple timers running at the same time (bad!).
 
  Why StartClock() works without useEffect?
  ----------------------------------------
  The StartClock function only runs when the button is clicked (not on every render).
  So the interval is created manually only when we want it — no unnecessary re-renders.
 
  Why NOT store timer ID in a normal variable like: let timer = 0?
  ----------------------------------------------------------------
  Local variables reset every time the component re-renders.
  Since count updates every second → component re-renders every second → timer becomes 0 again!
  Then clearInterval(timer) will NOT work correctly.
 
  Why use useRef/useState for the timer ID?
  -----------------------------------------
  They survive re-renders. The saved interval ID remains valid,
  so we can properly clearInterval when needed.
 */

/*  
  In early class, while learning useEffect we saw,without useEffect the setInterval was re-rendered on each state change. 
  we introduced useEffect so the logic inside the useEffect would run once the app is mounted. 
  Here we are manually starting the clock using the function StartClock and when click stop the old interval is thrown out Manually. 
  Again when the startClock is called a new interval with current state is formed, and the logic continues

  If we write as let timer = 0; when first time the count is updated, it causes re-render and again it is set to 0 (if it is defined in the App function scope)
  if it is defined in StartClock function. then we cannot clearInterval, as its scope is only for StartClock
*/
