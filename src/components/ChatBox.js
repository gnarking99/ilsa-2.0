import React, { useState, useRef, useEffect } from "react";

const ChatBox = () => {
  // Establece el estado para el valor del input
  const [inputValue, setInputValue] = useState("");

  // Establece el estado para los mensajes
  const [messages, setMessages] = useState(() => {
    const initialMessage = { text: "¡Hola! Soy tu intérprete de lenguaje de señas.", sent: true };
    return [initialMessage];
  });

  // Ref para auto-scroll al último mensaje
  const messagesEndRef = useRef(null);

  // Efecto para auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Función para manejar el envío de mensajes
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sent: true }]);
      setInputValue("");
    }
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sent ? "sent" : "received"}`}
          >
            {message.text}
            {message.sent && (
              <img
                src="/userProfilePicture.jpg"
                alt="Foto de perfil del usuario"
                className="user-profile-picture"
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un mensaje"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ChatBox;
