import useFetch from "./useFetch.js";

export default function App() {
  const {
    data,
    handleKeyPress,
    inputRef,
    inputURL,
    setInputURL,
    getData,
    Loading,
  } = useFetch();

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      {Loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{data.id ?? "Welcome"}</h1>
          <p>{data.title ?? "Enter the URL"}</p>
        </>
      )}

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter the URL"
        value={inputURL}
        onChange={(e) => setInputURL(e.target.value)}
        onKeyDown={handleKeyPress}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "2px solid #ccc",
          outline: "none",
        }}
      />

      <button
        onClick={() => getData(inputURL)}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "white",
          cursor: "pointer",
        }}
      >
        Get Data
      </button>
    </main>
  );
}
