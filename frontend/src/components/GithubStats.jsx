import React from 'react';
import { BentoCard } from './BentoGridDashboard';
import { Github, GitPullRequest, GitCommit, GitMerge } from 'lucide-react';

export default function GithubStats() {
  return (
    <BentoCard className="md:col-span-1 lg:col-span-1 border-t-cyber-pink/80 border-t">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2 text-cyber-light">
          <Github className="text-white" /> Activity
        </h3>
      </div>
      
      <div className="flex flex-col gap-4">
        {/* Mock Contribution Graph Base */}
        <div className="grid grid-cols-7 gap-1 w-full h-16 opacity-80">
          {[...Array(28)].map((_, i) => (
            <div 
              key={i} 
              className="rounded-sm bg-cyber-purple/40"
              style={{
                opacity: Math.random() > 0.4 ? Math.random() : 0.2
              }}
            />
          ))}
        </div>
        
        <div className="flex justify-between border-t border-white/10 pt-4 mt-2">
          <div className="flex flex-col items-center">
            <span className="text-cyber-purple font-bold text-lg"><GitCommit size={16} className="inline mr-1" />342</span>
            <span className="text-[10px] text-cyber-cyan uppercase tracking-wider">Commits</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-lg"><GitPullRequest size={16} className="inline mr-1" />24</span>
            <span className="text-[10px] text-cyber-cyan uppercase tracking-wider">PRs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-cyber-pink font-bold text-lg"><GitMerge size={16} className="inline mr-1" />98%</span>
            <span className="text-[10px] text-cyber-cyan uppercase tracking-wider">Success</span>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
