// ✅ ES Module style – works with Node 18+
const predictController = async (req, res) => {
  try {
    const { date, problem } = req.body;
    console.log("Received from frontend:", date, problem);

    if (!date || !problem) {
      return res.status(400).json({ error: "Date and Problem are required" });
    }

    // Forward to FastAPI using built-in fetch
    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ problem, date }),
    });

    const data = await response.json();
    return res.json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = predictController;
