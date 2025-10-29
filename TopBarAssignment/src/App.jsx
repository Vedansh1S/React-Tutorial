import { useState, useEffect } from 'react'

function App() {
  const [currentTab, setCurrenttab] = useState(1)
  const [tabContent, setTabContent] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(function(){
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/posts/" + currentTab)
      .then(async res => {
        const content = await res.json()
        setTabContent(content)
        setLoading(false)
      })
  }, [currentTab])

  const buttonStyle = (tab) => ({
    color: currentTab === tab ? "#fff" : "#333",
    backgroundColor: currentTab === tab ? "#007bff" : "#e0e0e0",
    border: "none",
    padding: "8px 16px",
    margin: "4px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.2s"
  })

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f6fa",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#333",
      padding: "20px"
    }}>
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        width: "300px"
      }}>
        <div>
          {[1,2,3,4].map(tab => (
            <button
              key={tab}
              onClick={() => setCurrenttab(tab)}
              style={buttonStyle(tab)}
            >
              Tab {tab}
            </button>
          ))}
        </div>
        <div style={{ marginTop: "20px", fontSize: "16px" }}>
          {loading ? "Loading..." : tabContent.title}
        </div>
      </div>
    </div>
  )
}

export default App
