import { useContext } from "react";
import { BGContext, ContextProvider } from "./Context.jsx";

function App() {
  return (
    <ContextProvider>
      <AppComponent />
    </ContextProvider>
  );
}

function AppComponent() {
  const { currentBG } = useContext(BGContext);
  const isLight = currentBG === "light";
  return (
    <div
      style={{
        backgroundColor: isLight ? "#f0f0f0" : "#121212",
        color: isLight ? "#000" : "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.4s ease-in-out",
      }}
    >
      <h1>Hello there, I am Background Changer</h1>
      <Button />
    </div>
  );
}

function Button() {
  const { currentBG, toggleTheme } = useContext(BGContext);
  const isLight = currentBG === "light";
  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: isLight ? "#121212" : "#f0f0f0",
          color: isLight ? "#fff" : "#000",
          padding: "20px",
          transition: "all 0.3s ease",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "500",
        }}
      >
        Switch to {isLight ? "Dark" : "Light"} Mode
      </button>
    </>
  );
}

export default App;
