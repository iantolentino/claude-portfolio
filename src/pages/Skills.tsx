import { Server, Paintbrush, Wrench, Monitor, Globe } from 'lucide-react'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
      {children}
    </span>
  )
}

const categories = [
  {
    icon: Server,
    label: 'Backend',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    dot: 'bg-blue-400',
    border: 'border-blue-400/20',
    skills: ['Python', 'Flask', 'FastAPI', 'Django', 'REST APIs', 'JWT Auth', 'Selenium', 'OpenCV'],
  },
  {
    icon: Paintbrush,
    label: 'Frontend',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    dot: 'bg-purple-400',
    border: 'border-purple-400/20',
    skills: ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'HTMX'],
  },
  {
    icon: Globe,
    label: 'Web & CMS',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    dot: 'bg-rose-400',
    border: 'border-rose-400/20',
    skills: ['WordPress', 'Custom Themes', 'Plugin Dev', 'SEO', 'cPanel', 'SSL Setup', 'Domain Config', 'Performance Tuning'],
  },
  {
    icon: Wrench,
    label: 'Tools & DevOps',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    dot: 'bg-emerald-400',
    border: 'border-emerald-400/20',
    skills: ['Git / GitHub', 'Docker', 'Linux', 'PowerShell', 'Shell Scripting', 'Postman', 'VS Code', 'AWS (basics)'],
  },
  {
    icon: Monitor,
    label: 'Database',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    dot: 'bg-amber-400',
    border: 'border-amber-400/20',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Schema Design', 'Query Optimization', 'Backups'],
  },
  {
    icon: Monitor,
    label: 'Desktop & Auto',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    dot: 'bg-orange-400',
    border: 'border-orange-400/20',
    skills: ['PyQt / PySide', 'Tkinter', 'Kivy', 'PDF Processing', 'Data Visualization', 'QR Tools', 'Speech Recognition'],
  },
]

export function Skills() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 space-y-10">

      <div className="text-center space-y-3">
        <SectionLabel>Stack</SectionLabel>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] tracking-tight">My Tech Stack</h1>
        <p className="text-[var(--color-muted-foreground)] text-sm">Technical tools I bring to life</p>
      </div>

      <div className="divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
        {categories.map(({ icon: Icon, label, color, bg, dot, border, skills }) => (
          <div key={label} className="flex flex-col sm:flex-row items-start gap-4 bg-[var(--color-card)] px-5 py-4 sm:py-5 hover:bg-[var(--color-secondary)]/40 transition-colors">
            {/* Category label */}
            <div className="flex items-center gap-2.5 sm:w-36 shrink-0">
              <div className={`flex h-7 w-7 items-center justify-center rounded-md ${bg} ${color}`}>
                <Icon size={14} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted-foreground)]">
                {label}
              </span>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className={`inline-flex items-center gap-1.5 rounded-full border ${border} px-2.5 py-1 text-xs font-medium text-[var(--color-foreground)]`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
