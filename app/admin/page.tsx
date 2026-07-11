export default function AdminPage() {
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🎬 JaatOG Addon Admin</h1>

      <p>Add new movie streams here.</p>

      <input
        placeholder="IMDb ID (tt1234567)"
        style={{ display: "block", marginBottom: 10, width: "100%", padding: 10 }}
      />

      <input
        placeholder="Title"
        style={{ display: "block", marginBottom: 10, width: "100%", padding: 10 }}
      />

      <input
        placeholder="Stream URL"
        style={{ display: "block", marginBottom: 10, width: "100%", padding: 10 }}
      />

      <button
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Save
      </button>
    </main>
  );
}