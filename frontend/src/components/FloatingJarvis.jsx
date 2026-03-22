import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingJarvis() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: "Hello. I am JARVIS, Nigel's AI assistant. Ask me anything about his skills or projects." }]);
  const [inputTitle, setInputTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputTitle.trim()) return;

    const userMessage = { role: 'user', content: inputTitle };
    setMessages(prev => [...prev, userMessage]);
    setInputTitle('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || data.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection to core systems lost. Nigel is a MERN developer and Data Analyst." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-secondary transition-all z-50 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[350px] h-[500px] glass-panel z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-glass-border"
          >
            {/* Header */}
            <div className="bg-primary/10 border-b border-glass-border p-4 flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Bot className="text-primary" size={24} />
                <h3 className="font-bold text-text-main">J.A.R.V.I.S Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-text-muted hover:text-text-main transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg-color/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-2xl rounded-tr-sm' 
                      : 'bg-glass-bg border border-glass-border text-text-main rounded-2xl rounded-tl-sm shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-glass-bg border border-glass-border text-text-muted p-3 rounded-2xl rounded-tl-sm text-sm flex gap-1 shadow-sm">
                    <span className="animate-pulse">.</span><span className="animate-pulse" style={{animationDelay: "0.2s"}}>.</span><span className="animate-pulse" style={{animationDelay: "0.4s"}}>.</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-glass-border bg-glass-bg backdrop-blur-md">
              <div className="relative">
                <input
                  type="text"
                  value={inputTitle}
                  onChange={(e) => setInputTitle(e.target.value)}
                  placeholder="Ask about Nigel..."
                  className="w-full bg-transparent border border-glass-border rounded-full pl-4 pr-12 py-3 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted"
                />
                <button type="submit" disabled={!inputTitle.trim() || isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full hover:bg-secondary disabled:opacity-50 transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
