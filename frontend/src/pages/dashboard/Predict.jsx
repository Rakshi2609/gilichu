import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Predict.module.css";

// This is the single React component for the entire application.
// It handles fetching the problem list and submitting the prediction request
// directly to the FastAPI server.
const App = () => {
  // State variables for the form and the result
  const [date, setDate] = useState("");
  const [problem, setProblem] = useState("");
  const [problems, setProblems] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // URL of the FastAPI server
  const FASTAPI_URL = "http://localhost:8000";

  // useEffect hook to fetch the list of problems when the component mounts
  useEffect(() => {
    // Axios is used to make HTTP requests
    axios
      .get(`${FASTAPI_URL}/problems`)
      .then((res) => {
        setProblems(res.data.problems);
        // Set the default problem to the first one in the list
        if (res.data.problems.length > 0) {
          setProblem(res.data.problems[0]);
        }
      })
      .catch((err) => {
        console.error("Error fetching problems:", err);
        setError("Failed to fetch problem types. Please check the backend server.");
      });
  }, []); // The empty array ensures this effect runs only once

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null); // Clear previous result
    setError(null);  // Clear previous error

    try {
      // Send the POST request directly to the FastAPI prediction endpoint
      const response = await axios.post(`${FASTAPI_URL}/predict`, { date, problem });
      setResult(response.data);
    } catch (err) {
      console.error("Error with prediction request:", err);
      // Display a user-friendly error message
      setError("Prediction failed. " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Grievance Predictor</h2>
        {error && (
          <div className={styles.error} role="alert">
            <span>{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="problem" className={styles.label}>
              Problem Type:
            </label>
            <select
              id="problem"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              required
              className={styles.select}
            >
              {problems.map((p, idx) => (
                <option key={idx} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="date" className={styles.label}>
              Prediction Date:
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={styles.button}
          >
            {loading ? "Predicting..." : "Get Prediction"}
          </button>
        </form>
        {result && (
          <div className={styles.result}>
            <h3 className={styles.resultTitle}>Prediction Result</h3>
            <p className={styles.resultText}>
              <span className={styles.label}>Problem:</span> {result.selected_problem}
            </p>
            <p className={styles.resultText}>
              <span className={styles.label}>Date:</span> {result.selected_date}
            </p>
            <p className={styles.resultText}>
              <span className={styles.label}>Predicted Complaints:</span>{" "}
              <span className={styles.resultHighlight}>{result.predicted_complaints}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
