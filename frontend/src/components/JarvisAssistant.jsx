import React, { useState } from 'react';
import { BentoCard } from './BentoGridDashboard';
import { Bot, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function JarvisAssistant() {
  const [messages, setMessages] = useState([
    { role: 'system', content: "Hello. I am JARVIS, Nigel's AI Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
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
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection to core systems lost. I'm operating offline right now, but Nigel is a MERN developer, Data Analyst, and final year CS student at Mumbai University." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BentoCard className="md:col-span-1 lg:col-span-1 border-t-cyber-cyan/60 border-t flex flex-col">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyber-light">
        <Bot className="text-cyber-purple" /> J.A.R.V.I.S
      </h3>
      
      <div className="flex-1 overflow-y-auto mb-4 space-y-3 custom-scrollbar h-48 pr-2">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-3 py-2 rounded-lg max-w-[90%] text-sm ${msg.role === 'user' ? 'bg-cyber-purple text-white rounded-br-none' : 'bg-white/10 text-cyber-light rounded-bl-none'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-lg bg-white/5 text-cyber-cyan rounded-bl-none flex items-center gap-2">
              <Loader2 size={14} className="animate-spin" /> Processing...
            </div>
          </div>
        )}
      </div>

      <form onSubmit={sendMessage} className="relative mt-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Nigel..."
          className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 pr-10 text-sm text-white outline-none focus:border-cyber-cyan focus:bg-white/10 transition-all"
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-cyber-cyan hover:bg-cyber-cyan/80 text-black disabled:opacity-50 transition-colors"
        >
          <Send size={14} />
        </button>
      </form>
    </BentoCard>
  );
}
