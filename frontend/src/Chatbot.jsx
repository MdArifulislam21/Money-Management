import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! Type 'hi' to test me." },
  ]);


  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);

    // simple test reply
    if (input.toLowerCase() === "hi") {
      setMessages((prev) => [...prev, { from: "bot", text: "Hello 👋" }]);
    } else if (input.toLowerCase() === "how are you?") {
      setMessages((prev) => [...prev, { from: "bot", text: "I'm just a bot, but thanks for asking!" }]);
    } else if (input.toLowerCase() === "bye") {
      setMessages((prev) => [...prev, { from: "bot", text: "Goodbye! Have a great day!" }]);
    } 
    else {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "I don't understand that." },
      ]);
    }
    setInput("");
  };
  return (
    <div className="fixed bottom-4 min-h-96 max-h-96 right-4 w-80 rounded-2xl shadow-lg bg-white border border-gray-200 flex flex-col overflow-hidden">
      <div className="bg-blue-600 text-white px-4 py-2 font-semibold">
        Chatbot
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`p-2 rounded-xl ${msg.from === "bot"
                ? "bg-gray-50 text-gray-800 self-start"
                : "bg-gray-100 text-gray-800 self-end"
              }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 bg-gray-50 p-3 text-sm outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="px-3 bg-blue-600 text-white text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
