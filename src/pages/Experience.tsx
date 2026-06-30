import { Briefcase, GraduationCap, Trophy, MapPin, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
      {children}
    </span>
  )
}

const timeline = [
  {
    icon: Briefcase,
    type: 'work',
    title: 'Web Developer',
    company: 'Strata Staff Global',
    location: '',
    period: 'June 2026 — Present',
    current: true,
    tags: ['WordPress', 'Full-Stack', 'cPanel', 'MySQL'],
    achievements: [
      'Full-stack web development: front-end, back-end, RESTful integrations, and application deployment',
      'WordPress development and maintenance: custom themes, plugin development, performance optimization, SEO-friendly structure',
      'cPanel hosting administration: server management, domain configuration, SSL setup, deployment workflows, troubleshooting',
      'Database management and optimization: MySQL schema design, query optimization, backups, data integrity',
      'Website performance, security hardening, and bug fixing across production environment',
    ],
  },
  {
    icon: Briefcase,
    type: 'work',
    title: 'IT Security Engineer',
    company: 'Nanox Philippines, Inc.',
    location: 'Mabalacat, Pampanga',
    period: 'June 2025 — June 2026',
    current: false,
    tags: ['PowerShell', 'Radmin', 'IT Security', 'Automation'],
    achievements: [
      'Reduced ticket resolution time by introducing standardized troubleshooting steps and knowledge base articles',
      'Monitored and maintained 100+ PCs ensuring >99% availability for critical workstations',
      'Implemented automation scripts for bulk user provisioning and reporting',
      'Created Radmin automation for server monitoring and maintenance',
      'Led in-house training sessions improving Office productivity and reducing repetitive support tickets',
    ],
  },
  {
    icon: Briefcase,
    type: 'work',
    title: 'IT Support / Developer — Internship',
    company: 'Various Projects & Freelance',
    location: 'Lubao, Pampanga',
    period: 'Jan 2025 — Apr 2025',
    current: false,
    tags: ['Python', 'CCTV', 'Data Management', 'Automation'],
    achievements: [
      'Resolved hardware/software issues across multiple environments',
      'Installed and configured CCTV systems for security monitoring',
      'Organized large digital archives and implemented efficient data management systems',
      'Assisted in inventory management and maintained e-commerce backends',
    ],
  },
  {
    icon: GraduationCap,
    type: 'education',
    title: 'B.S. Information Technology',
    company: 'Pampanga State Agricultural University',
    location: 'Pampanga',
    period: '2021 — 2025',
    current: false,
    tags: ['Software Dev', 'Networking', 'System Admin'],
    achievements: [
      'Graduated with GPA 1.59/5.00 (where 1 is highest)',
      'Completed capstone projects in adaptive brightness systems and productivity applications',
      'Participated in multiple programming competitions and innovation challenges',
    ],
  },
  {
    icon: Trophy,
    type: 'achievement',
    title: 'Competitions & Certifications',
    company: 'Academic Excellence',
    location: '',
    period: '2021 — 2025',
    current: false,
    tags: ['Competition', 'Certification'],
    achievements: [
      'Philippine Start-up Challenge — Regional Pitch (Oct 2023)',
      'PSAU Creativity & Innovation Day — Pitch Competition (Apr 2024)',
      'TOPCIT — Level 4 IT Competency (Apr 2024)',
      'DICT Programming Course — Accredited (Sept 2024)',
    ],
  },
]

const nodeColors: Record<string, string> = {
  work: 'border-[var(--color-primary)] bg-[var(--color-primary)]/10',
  education: 'border-purple-400 bg-purple-400/10',
  achievement: 'border-amber-400 bg-amber-400/10',
}

const diamondColors: Record<string, string> = {
  work: 'border-[var(--color-primary)]',
  education: 'border-purple-400',
  achievement: 'border-amber-400',
}

export function Experience() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 space-y-10">

      <div className="text-center space-y-3">
        <SectionLabel>Journey</SectionLabel>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] tracking-tight">Experience</h1>
        <p className="text-[var(--color-muted-foreground)] text-sm">
          My professional journey and the milestones along the way
        </p>
      </div>

      <div className="relative space-y-0">
        {/* Vertical line */}
        <div className="absolute left-[9px] sm:left-5 top-3 bottom-3 w-px bg-[var(--color-border)]" />

        {timeline.map((item, i) => {
          const Icon = item.icon
          return (
            <div key={item.title + item.company} className="relative flex gap-5 pb-8 last:pb-0">
              {/* Diamond node */}
              <div className="relative z-10 shrink-0 flex items-start pt-5">
                <div className={`h-[18px] w-[18px] rotate-45 border-2 ${diamondColors[item.type]} bg-[var(--color-background)]`} />
              </div>

              {/* Card */}
              <Card className={`flex-1 hover:border-[var(--color-primary)]/30 transition-all duration-200 ${item.current ? 'border-[var(--color-primary)]/40' : ''}`}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="flex flex-wrap items-center gap-2 text-base">
                        {item.title}
                        {item.current && <Badge variant="success" className="text-[10px]">Current</Badge>}
                      </CardTitle>
                      <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-sm text-[var(--color-muted-foreground)]">
                        <span className="flex items-center gap-1"><Briefcase size={12} /> {item.company}</span>
                        {item.location && <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>}
                        <span className="flex items-center gap-1"><Calendar size={12} /> {item.period}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(t => (
                        <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.achievements.map(a => (
                      <li key={a} className="flex gap-2.5 text-sm text-[var(--color-muted-foreground)]">
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--color-primary)]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>

    </div>
  )
}
