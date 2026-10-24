import React, { useState } from 'react';
import { Search, Plus, Trash2, SlidersHorizontal } from 'lucide-react';
import { portfolioData, SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(portfolioData.skills);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isEditing, setIsEditing] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState(portfolioData.skills[0].categoryName);
  const [newSkillLevel, setNewSkillLevel] = useState<'Advanced' | 'Intermediate' | 'Familiar'>('Intermediate');

  const categoriesList = ['All', ...skillCategories.map(c => c.categoryName)];

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    setSkillCategories(prev =>
      prev.map(cat => {
        if (cat.categoryName === newSkillCategory) {
          return {
            ...cat,
            skills: [...cat.skills, { name: newSkillName.trim(), level: newSkillLevel, highlight: true }]
          };
        }
        return cat;
      })
    );
    setNewSkillName('');
  };

  const handleDeleteSkill = (catName: string, skillName: string) => {
    setSkillCategories(prev =>
      prev.map(cat => {
        if (cat.categoryName === catName) {
          return {
            ...cat,
            skills: cat.skills.filter(s => s.name !== skillName)
          };
        }
        return cat;
      })
    );
  };

  const filteredCategories = skillCategories
    .filter(cat => activeCategory === 'All' || cat.categoryName === activeCategory)
    .map(cat => {
      const filteredSkills = cat.skills.filter(skill =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: filteredSkills
      };
    })
    .filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-indigo-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
              Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Technical Skills
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Curated proficiency across languages, full-stack web architectures, database design, and modern developer tooling. Readily adaptable and customizable.
            </p>
          </div>

          {/* Quick Customizer Toggle */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
              isEditing
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white hover:bg-slate-100 dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-800 dark:hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{isEditing ? 'Done Editing' : 'Customize Skills (Add / Remove)'}</span>
          </button>
        </div>

        {/* Add Skill Panel (When Customizing is active) */}
        {isEditing && (
          <div className="mb-8 p-5 bg-white dark:bg-[#0e1628] border border-slate-300 dark:border-indigo-900/60 rounded-xl shadow-sm animate-in fade-in duration-200">
            <div className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Plus className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Add a New Technical Skill</span>
            </div>
            <form onSubmit={handleAddSkill} className="flex flex-wrap gap-3 items-center">
              <input
                type="text"
                placeholder="e.g. Next.js, Docker, C#"
                value={newSkillName}
                onChange={(e) => setNewSkillName(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-[#070b16] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 min-w-[200px]"
              />

              <select
                value={newSkillCategory}
                onChange={(e) => setNewSkillCategory(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-[#070b16] border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                {skillCategories.map(cat => (
                  <option key={cat.categoryName} value={cat.categoryName}>
                    {cat.categoryName}
                  </option>
                ))}
              </select>

              <select
                value={newSkillLevel}
                onChange={(e) => setNewSkillLevel(e.target.value as any)}
                className="px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-[#070b16] border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                <option value="Advanced">Advanced</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Familiar">Familiar</option>
              </select>

              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer"
              >
                Add Skill
              </button>
            </form>
          </div>
        )}

        {/* Filter Tabs and Search Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-[#090d1a] border border-slate-300 dark:border-slate-800/80 rounded-xl">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-100 dark:bg-[#090d1a] border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#0a0f1e] border border-slate-200 dark:border-indigo-950/80 hover:border-indigo-300 dark:hover:border-indigo-800/70 shadow-sm hover:shadow transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  {category.categoryName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List inside Category */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-[#070b16] border border-slate-200 dark:border-slate-800/70 group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                        <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {skill.level}
                        </span>
                        {isEditing && (
                          <button
                            onClick={() => handleDeleteSkill(category.categoryName, skill.name)}
                            className="p-1 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                            title="Remove skill"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom count */}
              <div className="mt-6 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{category.skills.length} skills listed</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">Verified Basics</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
