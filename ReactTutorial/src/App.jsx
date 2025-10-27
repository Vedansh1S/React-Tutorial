import { useState } from "react";

function App() {
  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponent
              name={"Vedansh"}
              followerCount={20}
              time={"2m ago"}
              image={
                "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
              }
              description={
                "What to know how to win big? Check out how these folks won $6000 in bounties."
              }
            />
          </div>

          <div>
            <PostComponent
              name={"Harkirat"}
              followerCount={30}
              time={"3m ago"}
              image={
                "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
              }
              description={
                "Another LinkedIn post about how to win big in the crypto world."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Another way to define a style object
const style = {
  width: 250,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
  margin: 10,
};

function PostComponent({ name, followerCount, time, image, description }) {
  return (
    // calling the style object defined above. You can also define the style object inside the component itself.style={{width:250}}
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
        <div style={{ fontSize: 14, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{followerCount} followers</div>
          <div>{time}</div>
        </div>
      </div>

      <div style={{ fontSize: 14 }}>{description}</div>
    </div>
  );
}

// Export App Component to use it in other components
export default App;
