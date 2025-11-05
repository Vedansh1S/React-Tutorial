import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce.js";

function App() {
  const [query, setQuery] = useState(""); // Step 2: the query state is updated to the value of the input field
  const debouncedQuery = useDebounce(query, 500); // Step 3: the debouncedQuery state is updated to the value of the query state after 500ms

  // Step 7: since the debouncedQuery state is updated after 500ms, the useEffect hook is used to log the debouncedQuery state
  useEffect(() => {
    if (debouncedQuery) {
      console.log("Debounced query for: " + debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}> Debounced Search </h2>
      <input
        style={styles.input}
        //Step 1: Program execution starts here, onchange is triggered and setQuery is called, which updates the query state
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />
      <p style={styles.text}>
        {debouncedQuery
          ? `Searching for: ${debouncedQuery}`
          : "Start typing to search"}
      </p>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg,rgb(169, 198, 202),rgb(228, 121, 139))",
    fontFamily: "Inter, sans-serif",
  },
  heading: {
    color: "#333",
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  input: {
    width: "300px",
    padding: "10px 15px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    outline: "none",
    transition: "all 0.2s ease",
  },
  text: {
    marginTop: "20px",
    color: "#555",
    fontStyle: "italic",
  },
};
