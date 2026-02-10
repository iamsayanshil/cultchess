// server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxIEG6pAQUwtqbgNDAkT916ktkQG2gZbAyWxcrtMsF5aJMHw0vT67X3Lwbb_5VdViqlSA/exec", // <-- paste your Apps Script Web App URL
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const text = await response.text();
    try {
      const data = JSON.parse(text);
      res.json(data);
    } catch {
      res.status(500).json({ error: "Invalid JSON from Apps Script", text });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
