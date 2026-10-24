import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Layers, CheckCircle2, Calendar } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { getProjectGraphic } from './MockupGraphics';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0a0f1d] border border-slate-200 dark:border-indigo-900/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            <span>{project.category}</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="flex items-center gap-1 font-normal font-mono text-slate-500 dark:text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {project.date}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            {project.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Graphic Preview Container */}
        <div className="my-6 h-56 sm:h-72 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
          {getProjectGraphic(project.id)}
        </div>

        {/* Overview & Architecture */}
        <div className="space-y-5 text-sm sm:text-base">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">
              Project Overview
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-[#0e1628] border border-slate-200 dark:border-indigo-950">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-semibold text-sm mb-1.5">
              <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>System Architecture & Engineering</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 leading-relaxed font-mono">
              {project.architecture}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">
              Key Technical Deliverables
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-indigo-900/60 text-slate-800 dark:text-indigo-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors shadow-lg shadow-indigo-600/20"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-medium transition-colors border border-slate-300 dark:border-slate-700"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 cursor-pointer transition-colors"
          >
            Close Window (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
