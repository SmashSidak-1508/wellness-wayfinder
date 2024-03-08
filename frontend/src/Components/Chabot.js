// Chatbot.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleUserMessage = () => {
    if (userInput.trim() !== "") {
      setMessages([...messages, { text: userInput, type: "user" }]);
      // Simulate bot response after a short delay
      setTimeout(() => handleBotMessage("Bot: Hello! How can I help?"), 500);
      setUserInput("");
    }
  };

  const handleBotMessage = (message) => {
    setMessages([...messages, { text: message, type: "bot" }]);
  };

  const handleSearch = () => {
    // Perform search logic based on userInput
    // For demonstration, mocking search results
    const results = ["Result 1", "Result 2", "Result 3"];
    setSearchResults(results);
    setMessages([...messages, { text: `Search Results: ${results.join(", ")}`, type: "bot" }]);
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      <FontAwesomeIcon icon={faCommentDots} onClick={toggleChatbot} />

      <div className={`chatbot-window ${isOpen ? "open" : ""}`}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}

        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result, index) => (
              <div key={index} className="search-result">
                {result}
              </div>
            ))}
          </div>
        )}

        <div className={`chatbot-input ${isOpen ? "open" : ""}`}>
          <input
            type="text"
            placeholder="Type your message or search..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleUserMessage()}
          />

          <button className="search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <button className="send-button" onClick={handleUserMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
