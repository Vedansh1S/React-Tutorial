import { useState } from "react";

function App() {
  return (
    <>
      <Lightbulb />
    </>
  );
}

function Lightbulb() {
  const [isOn, setIsOn] = useState(true);
  return (
    <>
      <BulbStatus isOn={isOn} /> <br />
      <ToggleStatus toggle={() => setIsOn((isOn) => !isOn)} />
    </>
  );
}

function BulbStatus({ isOn }) {
  return (
    <h2 style={{ color: isOn ? "orange" : "gray" }}>
      {isOn ? "💡  Bulb is On" : "💤  Bulb is Off"}
    </h2>
  );
}

function ToggleStatus({ toggle }) {
  return (
    <>
      <button onClick={toggle}>Toggle the bulb state</button>
    </>
  );
}

export default App;
