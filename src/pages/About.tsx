import { Heart, GraduationCap, Users, Target, Trophy, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const philosophy = [
  { icon: Heart, title: 'Passion for Code', desc: 'Clean, maintainable solutions that stand the test of time.' },
  { icon: GraduationCap, title: 'Continuous Learning', desc: 'Always current with evolving tech and best practices.' },
  { icon: Users, title: 'Collaboration', desc: 'Best solutions come from open communication and shared goals.' },
  { icon: Target, title: 'User Focus', desc: 'Intuitive experiences that make technology accessible.' },
]

const achievements = [
  'Philippine Start-up Challenge — Regional Pitch (Oct 2023)',
  'PSAU Creativity & Innovation Day — Pitch Competition (Apr 2024)',
  'TOPCIT — Level 4 IT Competency (Apr 2024)',
  'DICT Programming Course — Accredited (Sept 2024)',
]

export function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col gap-5 h-[calc(100vh-64px)] overflow-hidden">

      {/* Header */}
      <div>
        <span className="inline-block border-2 border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
          Story
        </span>
        <h1 className="text-3xl font-bold text-[var(--color-foreground)] tracking-tight mt-1">About Me</h1>
        <p className="text-base text-[var(--color-muted-foreground)]">The person behind the code</p>
      </div>

      {/* Main — 3 col */}
      <div className="grid sm:grid-cols-3 gap-4 flex-1 min-h-0">

        {/* Left — bio + philosophy */}
        <div className="sm:col-span-2 flex flex-col gap-3">
          <p className="text-base text-[var(--color-muted-foreground)] leading-relaxed border-l-2 border-[var(--color-primary)] pl-3">
            I'm a <span className="text-[var(--color-foreground)] font-semibold">Full-Stack Web Developer</span> specializing
            in Python, Flask, FastAPI, REST APIs, and WordPress — focused on clean, maintainable code and practical automation.
          </p>
          <p className="text-base text-[var(--color-muted-foreground)] leading-relaxed border-l-2 border-[var(--color-border)] pl-3">
            Currently at <span className="text-[var(--color-foreground)] font-semibold">Strata Staff Global</span> — building
            full-stack web apps, maintaining WordPress sites, managing cPanel hosting, and keeping production running smoothly.
          </p>

          {/* Philosophy — 2×2 compact grid */}
          <div className="grid grid-cols-2 gap-2">
            {philosophy.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-2.5 p-3 border-2 border-[var(--color-border)] bg-[var(--color-card)] shadow-[3px_3px_0px_var(--color-shadow)]">
                <div className="shrink-0 flex h-7 w-7 items-center justify-center bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icon size={14} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-foreground)]">{title}</p>
                  <p className="text-xs text-[var(--color-muted-foreground)] leading-tight mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — education + achievements */}
        <div className="flex flex-col gap-3">
          {/* Education */}
          <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-[4px_4px_0px_var(--color-shadow)]">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={14} className="text-[var(--color-primary)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">Education</span>
            </div>
            <p className="font-semibold text-base text-[var(--color-foreground)]">B.S. Information Technology</p>
            <p className="text-sm text-[var(--color-muted-foreground)] mt-0.5">Pampanga State Agricultural University</p>
            <p className="text-sm text-[var(--color-muted-foreground)]">2021 — 2025</p>
            <Badge variant="success" className="mt-2 text-[10px]">GPA 1.59 / 5.00 (1 is highest)</Badge>
          </div>

          {/* Achievements */}
          <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-[4px_4px_0px_var(--color-shadow)]">
            <div className="flex items-center gap-2 mb-2">
              <Trophy size={14} className="text-[var(--color-primary)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">Achievements</span>
            </div>
            <ul className="space-y-1.5">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-[var(--color-muted-foreground)]">
                  <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[var(--color-success)]" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
