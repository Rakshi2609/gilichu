import React, { useState } from "react";
import axios from "axios";

const Predict = () => {
  const [date, setDate] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/predict", { date });
      setResult(response.data);
    } catch (error) {
      setResult("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>Predict</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Send Date</button>
      </form>
      {result && <div>Result: {JSON.stringify(result)}</div>}
    </div>
  );
};

export default Predict;
