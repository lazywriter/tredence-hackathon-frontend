import React, { useState } from "react";

function App() {
  const [userId, setUserId] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/send-id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="App">
      <h1>Enter User ID</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default App;
