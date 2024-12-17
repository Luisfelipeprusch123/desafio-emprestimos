import React, { useState } from 'react';
import faqData from './faq.json'; // Importando o arquivo JSON diretamente da mesma pasta
import './ChatBot.css';

interface ChatBotProps {
  toggleChatBot: () => void; // Função para fechar o ChatBot
}

const ChatBot: React.FC<ChatBotProps> = ({ toggleChatBot }) => {
  const [userQuestion, setUserQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // Função para lidar com a pergunta
  const handleAskQuestion = () => {
    // Procurar a pergunta no arquivo JSON
    const found = faqData.find(
      (faq) => faq.pergunta.toLowerCase() === userQuestion.toLowerCase()
    );

    // Exibir a resposta ou mensagem de erro
    if (found) {
      setAnswer(found.resposta);
    } else {
      setAnswer("Desculpe, não entendi sua pergunta.");
    }
  };

  return (
    <div className="chatbot-container fixed bottom-0 left-0 w-full max-w-md bg-white shadow-lg z-50 p-4 rounded-t-xl">
      <div className="chatbot-header flex justify-between items-center">
        <h3 className="text-xl font-semibold text-blue-600">ChatBot Financeiro</h3>
        {/* Botão de fechar com o ícone de "close" */}
        <button
          onClick={toggleChatBot} // Chama a função para fechar o ChatBot
          className="text-xl text-red-500 font-bold "
        >
          <span className="material-symbols-outlined">close</span> {/* Ícone de fechamento */}
        </button>
      </div>
      <div className="chatbot-body mt-4 h-72 overflow-y-auto">
        <div className="chatbot-message p-3 bg-gray-100 rounded-lg mb-3">
          <p className="text-gray-700 font-bold ">Olá! Como posso te ajudar hoje?</p>
        </div>
        <div className="chatbot-message p-3 bg-gray-100 rounded-lg mb-3">
          <input
            type="text"
            className="p-2 w-full border rounded-md"
            placeholder="Digite sua pergunta..."
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
          />
          <button
            onClick={handleAskQuestion}
            className="mt-2 p-2 bg-blue-500 text-white rounded-md w-full"
          >
            Perguntar
          </button>
        </div>
        {answer && (
          <div className="chatbot-message p-3 bg-gray-100 rounded-lg mb-3">
            <p className="text-gray-700">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
