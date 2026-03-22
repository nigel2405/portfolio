import React from 'react';
import { BentoCard } from './BentoGridDashboard';
import { Database, Layout, Server, BrainCircuit, Activity } from 'lucide-react';

const skills = [
  { name: 'React.js / Node.js', icon: <Server size={16} /> },
  { name: 'Python / Java', icon: <Activity size={16} /> },
  { name: 'MongoDB / MySQL', icon: <Database size={16} /> },
  { name: 'Docker / Ngrok', icon: <BrainCircuit size={16} /> },
  { name: 'Data Analytics / Power BI', icon: <Layout size={16} /> },
  { name: 'IoT Integration', icon: <Activity size={16} /> },
];

export default function Skills() {
  return (
    <BentoCard className="md:col-span-1 lg:col-span-1 border-t-cyber-purple/40 border-t">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyber-light">
        <Activity className="text-cyber-cyan" /> Tech Stack
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span 
            key={i} 
            className="px-3 py-1.5 rounded-md text-xs font-mono font-medium border border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan flex items-center gap-1.5 transition-colors hover:bg-cyber-cyan/30"
          >
            {skill.icon} {skill.name}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
