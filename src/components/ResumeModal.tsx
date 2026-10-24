import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
ANANYA GUPTA
${portfolioData.personal.role}
Email: ${portfolioData.personal.emailPlaceholder}
Location: ${portfolioData.personal.location}
GitHub: ${portfolioData.personal.githubPlaceholder}
LinkedIn: ${portfolioData.personal.linkedinPlaceholder}

SUMMARY
${portfolioData.personal.fullBio.join('\n\n')}

EDUCATION
1. Master of Computer Applications (MCA) — ${portfolioData.education[0].institution} (${portfolioData.education[0].period})
   Status: ${portfolioData.education[0].status} | CGPA: ${portfolioData.education[0].grade}
   Courses: ${portfolioData.education[0].courses.join(', ')}

2. Bachelor of Computer Applications (BCA) — ${portfolioData.education[1].institution} (${portfolioData.education[1].period})
   Status: ${portfolioData.education[1].status} | Grade: ${portfolioData.education[1].grade}
   Courses: ${portfolioData.education[1].courses.join(', ')}

TECHNICAL SKILLS
${portfolioData.skills.map(c => `${c.categoryName}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

FEATURED PROJECTS
${portfolioData.projects.map(p => `• ${p.title} (${p.technologies.join(', ')})
  ${p.description}
  GitHub: ${p.githubUrl}`).join('\n\n')}

EXPERIENCE & PRACTICAL LEARNING
${portfolioData.experience.map(e => `• ${e.title} at ${e.organization} (${e.period})
  ${e.points.map(pt => `  - ${pt}`).join('\n')}`).join('\n\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    const content = `ANANYA GUPTA — RESUME
Role: ${portfolioData.personal.role}
Email: ${portfolioData.personal.emailPlaceholder}
LinkedIn: ${portfolioData.personal.linkedinPlaceholder}
GitHub: ${portfolioData.personal.githubPlaceholder}
Location: ${portfolioData.personal.location}

==================================================
EDUCATION
==================================================
* Master of Computer Applications (MCA)
  Institution: ${portfolioData.education[0].institution}
  Period: ${portfolioData.education[0].period}
  Grade: ${portfolioData.education[0].grade}
  Key Coursework: ${portfolioData.education[0].courses.join(', ')}

* Bachelor of Computer Applications (BCA)
  Institution: ${portfolioData.education[1].institution}
  Period: ${portfolioData.education[1].period}
  Grade: ${portfolioData.education[1].grade}
  Key Coursework: ${portfolioData.education[1].courses.join(', ')}

==================================================
TECHNICAL SKILLS
==================================================
${portfolioData.skills.map(s => `* ${s.categoryName}: ${s.skills.map(k => k.name).join(', ')}`).join('\n')}

==================================================
PROJECTS
==================================================
${portfolioData.projects.map(p => `* ${p.title}
  Tech: ${p.technologies.join(', ')}
  Description: ${p.description}
  GitHub: ${p.githubUrl}`).join('\n\n')}

==================================================
EXPERIENCE & PRACTICAL LEARNING
==================================================
${portfolioData.experience.map(e => `* ${e.title} — ${e.organization} (${e.period})
${e.points.map(pt => `  - ${pt}`).join('\n')}`).join('\n\n')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "Ananya_Gupta_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 dark:bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#0a0e1c] border border-slate-200 dark:border-indigo-900/50 rounded-2xl shadow-2xl p-6 sm:p-10 text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Curriculum Vitae Preview</h2>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">· Ananya Gupta</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer"
              title="Copy formatted text resume to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadFile}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-xs font-semibold text-white transition-colors cursor-pointer shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="mt-6 p-6 sm:p-8 bg-slate-50 dark:bg-[#070b16] border border-slate-200 dark:border-slate-800/80 rounded-xl space-y-6 text-sm">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
              {portfolioData.personal.name}
            </h1>
            <p className="text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-medium mt-1">
              {portfolioData.personal.role}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 mt-3 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <span>{portfolioData.personal.emailPlaceholder}</span>
              <span aria-hidden="true">·</span>
              <span>{portfolioData.personal.location}</span>
              <span aria-hidden="true">·</span>
              <span>GitHub: {portfolioData.personal.githubPlaceholder.replace('https://', '')}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {portfolioData.personal.shortBio} Diligent problem-solver equipped with solid foundations in object-oriented programming, data structures, and responsive full-stack software development.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Education
            </h3>
            <div className="space-y-4">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-wrap justify-between items-baseline font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
                    <span>{edu.fullDegreeName} ({edu.degree})</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-mono">{edu.period}</span>
                  </div>
                  <div className="flex flex-wrap justify-between text-xs text-slate-600 dark:text-slate-400">
                    <span>{edu.institution} — {edu.location}</span>
                    <span className="text-indigo-700 dark:text-indigo-300 font-mono font-medium">{edu.grade}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                    <span className="text-slate-500 font-mono">Key Coursework:</span> {edu.courses.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Technical Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {portfolioData.skills.map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800/60 shadow-2xs">
                  <span className="text-slate-700 dark:text-slate-400 font-medium block mb-1">{cat.categoryName}:</span>
                  <span className="text-slate-900 dark:text-slate-200 font-mono text-[11px] leading-relaxed">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Key Academic & Practical Projects
            </h3>
            <div className="space-y-3">
              {portfolioData.projects.slice(0, 3).map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-wrap justify-between items-baseline text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    <span>{proj.title}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px] font-mono">{proj.date}</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="text-[11px] text-indigo-700 dark:text-indigo-300 font-mono">
                    Technologies: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience / Learning */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Internships & Practical Experience
            </h3>
            <div className="space-y-3">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex flex-wrap justify-between font-semibold text-slate-900 dark:text-white">
                    <span>{exp.title} — {exp.organization}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300 pl-1">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Note about placeholders */}
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/40 rounded text-center text-xs text-slate-600 dark:text-slate-400">
            Note: Placeholders in brackets [like this] can be customized directly in the portfolio configuration file.
          </div>
        </div>
      </div>
    </div>
  );
};
