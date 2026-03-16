import React from 'react';
import { BentoCard } from './BentoGridDashboard';
import { Database, Layout, Server, BrainCircuit, Activity } from 'lucide-react';

const skills = [
  { name: 'React.js', icon: <Layout size={16} /> },
  { name: 'Node.js', icon: <Server size={16} /> },
  { name: 'Express.js', icon: <Server size={16} /> },
  { name: 'MongoDB', icon: <Database size={16} /> },
  { name: 'Tailwind CSS', icon: <Layout size={16} /> },
  { name: 'JavaScript', icon: <Activity size={16} /> },
  { name: 'REST APIs', icon: <Server size={16} /> },
  { name: 'IoT Integration', icon: <BrainCircuit size={16} /> },
];

export default function Skills() {
  return (
    <BentoCard className="md:col-span-1 lg:col-span-1 border-t-amethyst-secondary/40 border-t">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-amethyst-light">
        <Activity className="text-amethyst-primary" /> Tech Stack
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span 
            key={i} 
            className="px-3 py-1.5 rounded-md text-xs font-mono font-medium border border-amethyst-primary/30 bg-amethyst-primary/10 text-amethyst-secondary flex items-center gap-1.5 transition-colors hover:bg-amethyst-primary/30"
          >
            {skill.icon} {skill.name}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
