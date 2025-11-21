import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// =======================
// FIX __dirname (ESM)
// =======================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =======================
// MIDDLEWARE
// =======================
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build"))); // phục vụ React build

// =======================
// API CHAT MẪU
// =======================
app.post("/chat", (req, res) => {
  const { message } = req.body;
  if (!message || message.trim() === "") {
    return res.status(400).json({ error: "Tin nhắn không được để trống!" });
  }

  const reply = `Bot: Bạn vừa gửi: "${message}"`;
  res.json({ reply });
});

// =======================
// Fallback: nếu không match API, trả React index.html
// =======================
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// =======================
// START SERVER
// =======================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("=================================");
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
  console.log("📌 Phục vụ React từ /client/build");
  console.log("=================================");
});
