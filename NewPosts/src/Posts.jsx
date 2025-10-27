export function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={{
      background: "white",
      borderRadius: "8px",
      padding: "12px",
      marginBottom: "12px",
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: "20%", borderRadius: "100px", marginBottom: "8px" }}
      />
      <h3 style={{ margin: "4px 0" }}>{name}</h3>
      {time!== undefined && <p style={{ margin: "0", color: "gray", fontSize: "14px" }}>
        {subtitle} • {time}
      </p>}
      <p style={{ marginTop: "8px" }}>{description}</p>
    </div>
  );
}
