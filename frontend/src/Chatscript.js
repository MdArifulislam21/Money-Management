(function () {
  // Avoid loading multiple times
  if (window.myChatWidgetLoaded) return;
  window.myChatWidgetLoaded = true;

  // Create style for bubble & chat window
  const style = document.createElement("style");
  style.textContent = `
    #my-chat-bubble {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #4f46e5;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 24px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      z-index: 9999;
    }
    #my-chat-window {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 350px;
      height: 500px;
      border: 1px solid #ddd;
      border-radius: 12px;
      background: white;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      display: none;
      overflow: hidden;
      z-index: 9999;
    }
    #my-chat-window iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  `;
  document.head.appendChild(style);

  // Create chat bubble
  const bubble = document.createElement("div");
  bubble.id = "my-chat-bubble";
  bubble.textContent = "💬";
  document.body.appendChild(bubble);

  // Create chat window (iframe)
  const chatWindow = document.createElement("div");
  chatWindow.id = "my-chat-window";
  chatWindow.innerHTML = `
    <iframe src="http://localhost:59116/chatbot.iife.js"></iframe>
    // <iframe src="https://www.chatbase.co/chatbot-iframe/Ciz2BSolDbCxP0Z1M2jYR"></iframe>
    
    
  `;
  const script = document.createElement('script');
    script.src = 'http://localhost:59116/chatbot.iife.js';
  document.body.appendChild(chatWindow);

  // Toggle window when bubble clicked
  bubble.addEventListener("click", () => {
    chatWindow.style.display =
      chatWindow.style.display === "none" || chatWindow.style.display === ""
        ? "block"
        : "none";
  });
})();
