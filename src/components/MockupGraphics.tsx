import React from 'react';

// Bespoke profile portrait illustration & badge for Ananya Gupta
export const ProfileGraphic: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'hero' }> = ({ size = 'hero' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    hero: 'w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72'
  }[size];

  return (
    <div className={`relative ${sizeClasses} mx-auto flex items-center justify-center`}>
      {/* Outer ambient glow rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-sky-400 opacity-40 blur-xl animate-pulse" />
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 opacity-70 p-[2px]">
        <div className="w-full h-full rounded-full bg-[#080c16]" />
      </div>

      {/* Main Avatar Surface */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#131b2e] to-[#0c1222] border-2 border-indigo-500/30 flex items-center justify-center p-3 shadow-2xl">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-indigo-400/80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3c299" />
              <stop offset="100%" stopColor="#df9f68" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1b29" />
              <stop offset="100%" stopColor="#0f0c18" />
            </linearGradient>
            <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
          </defs>

          {/* Background circular subtle grid */}
          <circle cx="100" cy="100" r="95" fill="#0b101e" stroke="#312e81" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Back hair silhouette */}
          <path d="M50 110 C45 60 70 30 100 30 C130 30 155 60 150 110 C155 145 148 175 145 190 L55 190 C52 175 45 145 50 110 Z" fill="url(#hairGrad)" />

          {/* Shoulders & Business Blazer */}
          <path d="M35 195 C40 160 65 140 100 140 C135 140 160 160 165 195 Z" fill="url(#blazerGrad)" stroke="#6366f1" strokeWidth="1.5" />
          {/* Inner Shirt Collar */}
          <path d="M85 140 L100 170 L115 140 Z" fill="#ffffff" />
          <path d="M82 142 L100 185 L95 185 L78 145 Z" fill="#c7d2fe" opacity="0.6" />
          <path d="M118 142 L100 185 L105 185 L122 145 Z" fill="#e0e7ff" opacity="0.6" />

          {/* Neck */}
          <path d="M88 120 L88 145 C88 152 112 152 112 145 L112 120 Z" fill="url(#skinGrad)" />

          {/* Face */}
          <ellipse cx="100" cy="98" rx="30" ry="36" fill="url(#skinGrad)" />

          {/* Front Hairstyle - parted and sleek */}
          <path d="M70 85 C68 55 82 42 100 42 C125 42 134 58 132 88 C126 72 112 66 100 68 C88 70 78 76 70 85 Z" fill="url(#hairGrad)" />
          <path d="M68 85 C66 110 74 135 78 145 C73 130 70 105 70 85 Z" fill="url(#hairGrad)" />
          <path d="M132 88 C134 110 126 135 122 145 C127 130 130 105 130 88 Z" fill="url(#hairGrad)" />

          {/* Soft facial features */}
          {/* Eyebrows */}
          <path d="M80 84 Q88 80 94 83" stroke="#261b17" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M106 83 Q112 80 120 84" stroke="#261b17" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Eyes with sparkle */}
          <ellipse cx="87" cy="91" rx="4.5" ry="3" fill="#1e1814" />
          <circle cx="88" cy="90" r="1.2" fill="#ffffff" />
          <ellipse cx="113" cy="91" rx="4.5" ry="3" fill="#1e1814" />
          <circle cx="114" cy="90" r="1.2" fill="#ffffff" />
          {/* Glasses frame (modern thin stylish frames) */}
          <rect x="76" y="84" width="22" height="15" rx="4" stroke="#818cf8" strokeWidth="1.5" fill="rgba(129, 140, 248, 0.08)" />
          <rect x="102" y="84" width="22" height="15" rx="4" stroke="#818cf8" strokeWidth="1.5" fill="rgba(129, 140, 248, 0.08)" />
          <path d="M98 89 L102 89" stroke="#818cf8" strokeWidth="1.5" />
          <path d="M76 89 L70 87" stroke="#818cf8" strokeWidth="1.2" />
          <path d="M124 89 L130 87" stroke="#818cf8" strokeWidth="1.2" />

          {/* Gentle Smile */}
          <path d="M92 114 Q100 120 108 114" stroke="#9f4039" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Soft blush */}
          <circle cx="82" cy="104" r="5" fill="#f87171" opacity="0.25" />
          <circle cx="118" cy="104" r="5" fill="#f87171" opacity="0.25" />
        </svg>

        {/* Small floating badge */}
        <div className="absolute bottom-2 bg-slate-900/90 backdrop-blur-md border border-indigo-500/50 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-medium text-slate-200">MCA Scholar</span>
        </div>
      </div>
    </div>
  );
};

// Bespoke Mockup for Project 1: CampusPulse
export const CampusPulseGraphic: React.FC = () => (
  <div className="w-full h-full bg-[#0a0f1d] p-3 sm:p-4 rounded-xl flex flex-col justify-between border border-indigo-900/40 relative overflow-hidden group">
    {/* Subtle gradient background sheen */}
    <div className="absolute -top-10 -right-10 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

    {/* Header bar */}
    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="ml-2 text-xs font-mono text-slate-400">campuspulse.edu/dashboard</span>
      </div>
      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/70 border border-indigo-800/60 px-2 py-0.5 rounded">
        v2.4 Live
      </span>
    </div>

    {/* Dashboard Grid Simulation */}
    <div className="grid grid-cols-3 gap-2 my-2 flex-1">
      {/* Attendance card */}
      <div className="col-span-2 bg-[#10172a] p-2.5 rounded-lg border border-slate-800/80 flex flex-col justify-between">
        <div className="flex justify-between items-center text-[11px] text-slate-400">
          <span>Overall Attendance</span>
          <span className="text-emerald-400 font-semibold font-mono">88.4%</span>
        </div>
        {/* Attendance bar chart */}
        <div className="flex items-end gap-1.5 h-12 pt-2">
          <div className="flex-1 bg-indigo-500/30 rounded-t h-7 flex items-end">
            <div className="w-full bg-indigo-500 h-5 rounded-t" />
          </div>
          <div className="flex-1 bg-indigo-500/30 rounded-t h-9 flex items-end">
            <div className="w-full bg-indigo-500 h-8 rounded-t" />
          </div>
          <div className="flex-1 bg-indigo-500/30 rounded-t h-12 flex items-end">
            <div className="w-full bg-emerald-500 h-11 rounded-t" />
          </div>
          <div className="flex-1 bg-indigo-500/30 rounded-t h-8 flex items-end">
            <div className="w-full bg-indigo-500 h-7 rounded-t" />
          </div>
          <div className="flex-1 bg-indigo-500/30 rounded-t h-10 flex items-end">
            <div className="w-full bg-indigo-400 h-9 rounded-t" />
          </div>
        </div>
        <div className="flex justify-between text-[9px] text-slate-500 font-mono pt-1">
          <span>DBMS</span>
          <span>DSA</span>
          <span>WebEng</span>
          <span>OS</span>
          <span>Math</span>
        </div>
      </div>

      {/* Right mini stat card */}
      <div className="col-span-1 bg-[#10172a] p-2.5 rounded-lg border border-slate-800/80 flex flex-col justify-between">
        <span className="text-[10px] text-slate-400">Current Semester</span>
        <div className="text-base font-bold text-white font-mono">Sem III</div>
        <div className="text-[10px] text-indigo-400 bg-indigo-950/60 p-1 rounded text-center">
          5 Enrolled Modules
        </div>
      </div>
    </div>

    {/* Bottom notice strip */}
    <div className="bg-[#0e1526] p-2 rounded-lg border border-slate-800/60 flex items-center justify-between text-[11px]">
      <div className="flex items-center gap-2 truncate">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
        <span className="text-slate-300 truncate">Upcoming: MCA Mini-Project Submission Sprint</span>
      </div>
      <span className="text-[10px] text-slate-500 shrink-0">Due in 3 days</span>
    </div>
  </div>
);

// Bespoke Mockup for Project 2: TaskForge
export const TaskForgeGraphic: React.FC = () => (
  <div className="w-full h-full bg-[#0c101c] p-3 sm:p-4 rounded-xl flex flex-col justify-between border border-purple-900/40 relative overflow-hidden group">
    <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

    {/* Header bar */}
    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
        <span className="text-xs font-semibold text-slate-200">Sprint Board #4</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/50">
          12 / 16 Done
        </span>
      </div>
    </div>

    {/* Kanban Columns */}
    <div className="grid grid-cols-3 gap-2 my-2 flex-1">
      {/* Column 1: In Progress */}
      <div className="bg-[#111728] p-2 rounded-lg border border-slate-800 flex flex-col gap-1.5">
        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono font-medium pb-1 border-b border-slate-800/60">
          <span>IN PROGRESS</span>
          <span className="text-amber-400">2</span>
        </div>
        <div className="bg-[#182138] p-1.5 rounded text-[10px] border border-amber-500/30">
          <div className="text-slate-200 font-medium truncate">JWT Auth Guard</div>
          <div className="text-[9px] text-amber-400 mt-1">High Priority</div>
        </div>
        <div className="bg-[#182138] p-1.5 rounded text-[10px] border border-slate-700/60">
          <div className="text-slate-300 truncate">Dark Mode Hook</div>
          <div className="text-[9px] text-slate-400 mt-1">Enhancement</div>
        </div>
      </div>

      {/* Column 2: Code Review */}
      <div className="bg-[#111728] p-2 rounded-lg border border-slate-800 flex flex-col gap-1.5">
        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono font-medium pb-1 border-b border-slate-800/60">
          <span>REVIEW</span>
          <span className="text-sky-400">1</span>
        </div>
        <div className="bg-[#182138] p-1.5 rounded text-[10px] border border-sky-500/30">
          <div className="text-slate-200 font-medium truncate">REST Query Schema</div>
          <div className="text-[9px] text-sky-400 mt-1">PR #28 Open</div>
        </div>
      </div>

      {/* Column 3: Done */}
      <div className="bg-[#111728] p-2 rounded-lg border border-slate-800 flex flex-col gap-1.5">
        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono font-medium pb-1 border-b border-slate-800/60">
          <span>COMPLETED</span>
          <span className="text-emerald-400">4</span>
        </div>
        <div className="bg-[#182138] p-1.5 rounded text-[10px] border border-emerald-500/30 opacity-80">
          <div className="text-slate-300 line-through truncate">Responsive Navbar</div>
          <div className="text-[9px] text-emerald-400 mt-1">Merged</div>
        </div>
      </div>
    </div>

    {/* Footer status */}
    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/50">
      <span>Sprint Velocity: 24 pts</span>
      <span className="text-purple-400">Active Sprint</span>
    </div>
  </div>
);

// Bespoke Mockup for Project 3: AlgoVista
export const AlgoVistaGraphic: React.FC = () => (
  <div className="w-full h-full bg-[#080f1e] p-3 sm:p-4 rounded-xl flex flex-col justify-between border border-cyan-900/40 relative overflow-hidden group">
    <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

    {/* Top Bar with Controls */}
    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono font-bold text-cyan-400">AlgoVista // QuickSort</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
          O(N log N)
        </span>
      </div>
    </div>

    {/* Sorting Visualizer Simulation */}
    <div className="flex items-end justify-between gap-1 h-20 sm:h-24 px-2 my-2 bg-[#0d172c] rounded-lg border border-slate-800/80 p-2">
      <div className="w-3 bg-cyan-600/70 rounded-t h-8" />
      <div className="w-3 bg-cyan-600/70 rounded-t h-14" />
      <div className="w-3 bg-amber-400 rounded-t h-20 animate-pulse" title="Pivot Element" />
      <div className="w-3 bg-cyan-600/70 rounded-t h-11" />
      <div className="w-3 bg-emerald-400 rounded-t h-16" title="Sorted Partition" />
      <div className="w-3 bg-emerald-400 rounded-t h-18" title="Sorted Partition" />
      <div className="w-3 bg-rose-400 rounded-t h-6" title="Comparing" />
      <div className="w-3 bg-cyan-600/70 rounded-t h-13" />
      <div className="w-3 bg-cyan-600/70 rounded-t h-22" />
      <div className="w-3 bg-cyan-600/70 rounded-t h-10" />
    </div>

    {/* Metrics / Info */}
    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
      <span>Comparisons: 142</span>
      <span className="text-cyan-400">Array Size: 64</span>
      <span>Speed: 50ms</span>
    </div>
  </div>
);

// Bespoke Mockup for Project 4: NovaMart
export const NovaMartGraphic: React.FC = () => (
  <div className="w-full h-full bg-[#0a1120] p-3 sm:p-4 rounded-xl flex flex-col justify-between border border-blue-900/40 relative overflow-hidden group">
    <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

    {/* Header bar */}
    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
        <span className="text-xs font-semibold text-slate-200">NovaMart Storefront</span>
      </div>
      <span className="text-[10px] font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/50">
        Cart (3)
      </span>
    </div>

    {/* Products grid */}
    <div className="grid grid-cols-2 gap-2 my-2 flex-1">
      <div className="bg-[#121c32] p-2 rounded-lg border border-slate-800 flex flex-col justify-between">
        <div className="h-10 bg-slate-800/50 rounded flex items-center justify-center text-[11px] text-blue-300">
          Mechanical Keyboard
        </div>
        <div className="flex justify-between items-center text-[10px] pt-1">
          <span className="text-slate-400">Inventory: 24</span>
          <span className="text-emerald-400 font-semibold">$89.00</span>
        </div>
      </div>

      <div className="bg-[#121c32] p-2 rounded-lg border border-slate-800 flex flex-col justify-between">
        <div className="h-10 bg-slate-800/50 rounded flex items-center justify-center text-[11px] text-blue-300">
          Wireless ANC Headset
        </div>
        <div className="flex justify-between items-center text-[10px] pt-1">
          <span className="text-slate-400">Inventory: 12</span>
          <span className="text-emerald-400 font-semibold">$149.00</span>
        </div>
      </div>
    </div>

    {/* Footer schema note */}
    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800/50">
      <span>DB: MySQL 8.0 (3NF)</span>
      <span className="text-blue-400">REST API Ready</span>
    </div>
  </div>
);

// Map project graphic helper
export const getProjectGraphic = (projectId: string) => {
  switch (projectId) {
    case 'campus-pulse':
      return <CampusPulseGraphic />;
    case 'task-forge':
      return <TaskForgeGraphic />;
    case 'algo-vista':
      return <AlgoVistaGraphic />;
    case 'novamart-store':
    default:
      return <NovaMartGraphic />;
  }
};
