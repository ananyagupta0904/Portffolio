import React from 'react';
import { Download, FileText, Eye, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  const handleQuickDownload = () => {
    const textContent = `ANANYA GUPTA — RESUME
Role: ${portfolioData.personal.role}
Email: ${portfolioData.personal.emailPlaceholder}
Location: ${portfolioData.personal.location}
GitHub: ${portfolioData.personal.githubPlaceholder}
LinkedIn: ${portfolioData.personal.linkedinPlaceholder}

EDUCATION:
- Master of Computer Applications (MCA) — ${portfolioData.education[0].institution} (${portfolioData.education[0].period})
  Status: ${portfolioData.education[0].status} | CGPA: ${portfolioData.education[0].grade}
- Bachelor of Computer Applications (BCA) — ${portfolioData.education[1].institution} (${portfolioData.education[1].period})
  Status: ${portfolioData.education[1].status} | Grade: ${portfolioData.education[1].grade}

CORE SKILLS:
${portfolioData.skills.map(s => `${s.categoryName}: ${s.skills.map(k => k.name).join(', ')}`).join('\n')}

PROJECT HIGHLIGHTS:
${portfolioData.projects.map(p => `* ${p.title} (${p.technologies.join(', ')}): ${p.description}`).join('\n')}
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = portfolioData.personal.resumeFileName.replace('.pdf', '.txt');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume-section" className="py-16 border-t border-slate-200 dark:border-indigo-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-[#0d1428] dark:via-[#090e1c] dark:to-[#0d1428] border border-slate-200 dark:border-indigo-800/40 shadow-xl overflow-hidden">
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & Value Prop */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold">
                <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Curriculum Vitae</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Looking for a Driven Graduate Software Engineer?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Download my comprehensive resume detailing my BCA academic record, ongoing MCA specialization, full-stack web projects, and core competencies in React, Node, Python, and SQL.
              </p>

              {/* Quick checklist */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  BCA Degree Verified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  MCA Coursework Highlights
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  4 Verified Project Repositories
                </span>
              </div>
            </div>

            {/* Right Column: Prominent Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-150 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <Eye className="w-4 h-4" />
                <span>Preview Resume Online</span>
              </button>

              <button
                onClick={handleQuickDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-[#10172c] dark:hover:bg-[#18233e] text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white font-medium text-sm transition-all duration-150 border border-slate-300 dark:border-indigo-900/60 hover:border-indigo-500 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shadow-sm"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume File</span>
              </button>

              <div className="text-[11px] text-center text-slate-500 dark:text-slate-400 font-mono pt-1">
                File format: {portfolioData.personal.resumeFileName} (PDF placeholder)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
