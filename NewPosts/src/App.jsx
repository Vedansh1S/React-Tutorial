import { useState } from "react";
import { PostComponent } from "./Posts";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post, index) => (
    <PostComponent
      key={index}
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Vedansh",
        subtitle: "10,000 followers",
        time: "2m ago",
        image:
          "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description:
          "Want to know how to win big? Check out how these folks won $6000 in bounties.",
      },
    ]);
  }

  return (
    <div
      style={{
        background: "#f5f6fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={addPost}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          background: "#0984e3",
          color: "white",
          cursor: "pointer",
        }}
      >
        Add post
      </button>

      <div style={{ width: "400px", textAlign: "center" }}>
        {postComponents.length > 0 ? postComponents : <p>No posts yet</p>}
      </div>
    </div>
  );
}

export default App;
