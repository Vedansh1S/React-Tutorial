import { useContext, useState } from "react";
import "./Context";
import { BulbContext, ContextProvider } from "./Context";

function App() {
  return (
    <ContextProvider>
      <Lightbulb />
    </ContextProvider>
  );
}

function Lightbulb() {
  return (
    <>
      <BulbStatus /> <br />
      <ToggleStatus />
    </>
  );
}

function BulbStatus() {
  const { isOn } = useContext(BulbContext);
  return (
    <h2 style={{ color: isOn ? "orange" : "gray" }}>
      {isOn ? "💡  Bulb is On" : "💤  Bulb is Off"}
    </h2>
  );
}

function ToggleStatus() {
  const { setIsOn } = useContext(BulbContext);

  const toggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggle}>Toggle the bulb state</button>
    </>
  );
}

export default App;
