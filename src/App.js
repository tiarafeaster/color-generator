import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hey girl");
  };

  return (
    <div>
      <div className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            placeholder="#f15025"
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </div>
      <div className="colors">
        <h4>list goes here</h4>
      </div>
    </div>
  );
}

export default App;
