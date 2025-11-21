import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const sendMessage = async () => {
    if (!message) return;
    setChatLog(prev => [...prev, { sender: "You", text: message }]);

    try {
      const res = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      setChatLog(prev => [...prev, { sender: "You", text: message }, { sender: "Bot", text: data.reply }]);
    } catch (err) {
      setChatLog(prev => [...prev, { sender: "Bot", text: "Lỗi server!" }]);
      console.error(err);
    }

    setMessage("");
  };

  const handleKeyPress = (e) => { if (e.key === "Enter") sendMessage(); };

  return (
    <div className="App">
      <h1>🌿 Chatbot Ẩm Thực Đà Nẵng</h1>
      <div className="chat-box">
        {chatLog.map((msg, i) => (
          <p key={i} className={msg.sender === "You" ? "user-msg" : "bot-msg"}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Nhập món ăn..."
      />
      <button onClick={sendMessage}>Gửi</button>
    </div>
  );
}

export default App;
