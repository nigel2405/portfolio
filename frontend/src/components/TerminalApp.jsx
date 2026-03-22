import React, { useState, useRef, useEffect } from 'react';
import { BentoCard } from './BentoGridDashboard';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function TerminalApp() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'JARVIS OS Terminal v1.0.0' },
    { type: 'output', text: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  const scrollToBottom = () => endRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(scrollToBottom, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';

      switch (cmd) {
        case 'help':
          response = 'Available commands: about, skills, projects, github, contact, clear';
          break;
        case 'about':
          response = 'Nigel Shivalkar: A Computer Science student at Univ of Mumbai, specializing in MERN stack, Data Analytics, and IoT systems.';
          break;
        case 'skills':
          response = 'React.js, Node.js, Express.js, MongoDB, Python, Java, Power BI, Advanced Excel, Linux.';
          break;
        case 'projects':
          response = 'GPU Allocation System (Deployed), Smart RFID Attendance, TripO (Startup project), Data Analytics Dashboards.';
          break;
        case 'github':
          response = "Opening Nigel Shivalkar's GitHub profile...";
          window.open('https://github.com/nigel2405', '_blank');
          break;
        case 'contact':
          response = 'Email: nigelshivalkar6@gmail.com | Phone: +91 7058428963 | LinkedIn: /in/nigel-shivalkar-250608372';
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case '':
          break;
        default:
          response = `Command not found: ${cmd}`;
      }

      setHistory(prev => [
        ...prev, 
        { type: 'input', text: `> ${cmd}` },
        ...(response ? [{ type: 'output', text: response }] : [])
      ]);
      setInput('');
    }
  };

  return (
    <BentoCard className="md:col-span-2 lg:col-span-2 border-t-[#00ffcc]/30 border-t">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2 text-cyber-light">
          <TerminalIcon className="text-[#00ffcc]" /> override.exe
        </h3>
      </div>
      <div className="bg-[#05010a] rounded-lg p-4 font-mono text-sm h-64 overflow-y-auto border border-white/5 flex flex-col custom-scrollbar">
        {history.map((line, i) => (
          <div key={i} className={`mb-1 ${line.type === 'input' ? 'text-cyber-purple' : 'text-[#00ffcc]/80'}`}>
            {line.text}
          </div>
        ))}
        <div className="flex mt-2">
          <span className="text-cyber-pink mr-2">root@ns:~#</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent outline-none text-white border-none caret-[#00ffcc]"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={endRef} />
      </div>
    </BentoCard>
  );
}
