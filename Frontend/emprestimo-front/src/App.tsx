import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmprestimoForm from "./components/EmprestimoForm";
import ChatBot from "./components/ChatBot";

const App: React.FC = () => {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  // Função para alternar o estado do ChatBot (abrir/fechar)
  const toggleChatBot = () => {
    setIsChatBotOpen(!isChatBotOpen);
  };

  return (
    <Router>
      {/* Definindo as rotas da aplicação */}
      <Routes>
        <Route path="/" element={<EmprestimoForm />} />
      </Routes>

      {/* Botão flutuante do ChatBot */}
      {!isChatBotOpen && (
        <div
          onClick={toggleChatBot}
          className="fixed bottom-10 left-10 p-4 bg-blue-500 text-white rounded-full cursor-pointer shadow-lg hover:bg-blue-600 transition duration-300"
        >
          💬
        </div>
      )}

      {/* Renderiza o ChatBot apenas quando está aberto */}
      {isChatBotOpen && <ChatBot toggleChatBot={toggleChatBot} />}
    </Router>
  );
};

export default App;
