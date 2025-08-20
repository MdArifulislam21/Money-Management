import React from "react";
import ReactDOM from "react-dom/client";
import Chatbot from "./Chatbot";
import "./index.css"; // ✅ tailwind styles

(function () {
  window.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById("my-chat-widget");
    if (!container) {
      container = document.createElement("div");
      container.id = "my-chat-widget";
      document.body.appendChild(container);
    }

    const root = ReactDOM.createRoot(container);
    root.render(<Chatbot />);
  });
})();
