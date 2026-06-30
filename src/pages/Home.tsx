import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowRight, Code2, Server, Globe, Star, GitFork, ExternalLink, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { fetchGitHubStats, fetchGitHubProjects, type GitHubStats, type Project } from '@/lib/github'

const PHRASES = [
  'build full-stack web applications.',
  'develop WordPress sites & REST APIs.',
  'automate IT operations with Python.',
  'love clean, maintainable code.',
]

function useTypewriter(phrases: string[]) {
  const [state, setState] = useState({ text: '', idx: 0, deleting: false })

  useEffect(() => {
    const phrase = phrases[state.idx % phrases.length]
    if (!state.deleting && state.text === phrase) {
      const t = setTimeout(() => setState(s => ({ ...s, deleting: true })), 2200)
      return () => clearTimeout(t)
    }
    const delay = state.deleting ? 28 : 62
    const t = setTimeout(() => {
      setState(s => {
        if (!s.deleting) return { ...s, text: phrase.slice(0, s.text.length + 1) }
        const next = s.text.slice(0, -1)
        return next === '' ? { text: '', idx: s.idx + 1, deleting: false } : { ...s, text: next }
      })
    }, delay)
    return () => clearTimeout(t)
  }, [state, phrases])

  return state.text
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
      {children}
    </span>
  )
}

const primarySkills = ['Python', 'Flask', 'FastAPI', 'JavaScript', 'WordPress', 'MySQL']
const secondarySkills = ['React', 'TypeScript', 'PowerShell', 'Linux', 'cPanel']

const STATIC_STATS = [
  { value: '70+', label: 'Projects' },
  { value: '1+', label: 'Years Exp.' },
  { value: '25+', label: 'Technologies' },
  { value: '4', label: 'Certifications' },
]

export function Home() {
  const typed = useTypewriter(PHRASES)
  const [liveStats, setLiveStats] = useState<GitHubStats | null>(null)
  const [featured, setFeatured] = useState<Project[]>([])

  useEffect(() => {
    fetchGitHubStats().then(setLiveStats)
    fetchGitHubProjects().then((data) => {
      const top = [...data].sort((a, b) => (b.stars + b.forks) - (a.stars + a.forks)).slice(0, 3)
      setFeatured(top)
    })
  }, [])

  const stats = liveStats
    ? [
        { value: `${liveStats.repos}`, label: 'Projects' },
        { value: '1+', label: 'Years Exp.' },
        { value: `${liveStats.languages}`, label: 'Technologies' },
        { value: '4', label: 'Certifications' },
      ]
    : STATIC_STATS

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 space-y-20">

      {/* Hero — browser frame */}
      <section>
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 bg-[var(--color-secondary)] px-4 py-3 border-b border-[var(--color-border)]">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <div className="ml-3 flex-1 rounded-md bg-[var(--color-background)] px-3 py-1 text-xs text-[var(--color-muted-foreground)] text-center">
              iantolentino.dev
            </div>
          </div>

          {/* Hero content */}
          <div className="bg-[var(--color-card)] px-8 py-12 sm:px-14 sm:py-16 space-y-6">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold text-[var(--color-foreground)] tracking-tight leading-tight">
                Ian Tolentino<span className="text-[var(--color-primary)]">.</span>
              </h1>

              {/* Terminal line */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 font-mono text-sm">
                <span className="text-[var(--color-success)]">&gt;</span>
                <span className="text-[var(--color-foreground)]">I {typed}</span>
                <span
                  className="inline-block w-0.5 h-4 bg-[var(--color-primary)]"
                  style={{ animation: 'blink 1s step-end infinite' }}
                />
              </div>
            </div>

            <p className="max-w-lg text-[var(--color-muted-foreground)] leading-relaxed">
              Full-Stack Web Developer specializing in Python, Flask, React, and WordPress.
              Currently at{' '}
              <span className="font-semibold text-[var(--color-foreground)]">Strata Staff Global</span>
              {' '}— building and maintaining production web systems.
            </p>

            <div className="flex items-center gap-1.5 text-sm text-[var(--color-muted-foreground)]">
              <MapPin size={13} />
              <span>Mabalacat, Pampanga</span>
              <span className="mx-2">·</span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[var(--color-success)]" />
                Available for opportunities
              </span>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {primarySkills.map(s => <Badge key={s} variant="default">{s}</Badge>)}
              {secondarySkills.map(s => <Badge key={s} variant="secondary">{s}</Badge>)}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/projects"><ArrowRight size={15} /> View Projects</Link>
              </Button>
              <Button variant="secondary" asChild>
                <a href="https://github.com/iantolentino" target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={15} /> GitHub
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="https://www.linkedin.com/in/iantolentino" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon size={15} /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:iantolentino0110@gmail.com"><Mail size={15} /> Email Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center space-y-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5">
            <div className="text-3xl font-bold text-[var(--color-primary)]">{value}</div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-foreground)]">{label}</div>
          </div>
        ))}
      </section>

      {/* What I Do */}
      <section className="space-y-6 text-center">
        <div className="space-y-3">
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-foreground)]">What I Do</h2>
          <p className="text-[var(--color-muted-foreground)] max-w-md mx-auto text-sm">
            End-to-end development from server to browser
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 text-left">
          {[
            { icon: Server, title: 'Backend & APIs', desc: 'REST APIs with Python (Flask, FastAPI), JWT auth, async patterns, and PostgreSQL / MySQL.' },
            { icon: Code2, title: 'Full-Stack Dev', desc: 'Frontend with React & TypeScript paired with solid server-side foundations.' },
            { icon: Globe, title: 'Web & Hosting', desc: 'WordPress development, cPanel administration, SSL setup, performance tuning, and security hardening.' },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover:border-[var(--color-primary)]/40 hover:-translate-y-1 transition-all duration-200">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icon size={20} />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent><CardDescription>{desc}</CardDescription></CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6 text-center">
        <div className="space-y-3">
          <SectionLabel>Work</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-foreground)]">Featured Projects</h2>
          <p className="text-[var(--color-muted-foreground)] max-w-md mx-auto text-sm">
            Top repositories by community engagement
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 text-left">
          {featured.length === 0
            ? Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="flex flex-col animate-pulse">
                  <div className="h-36 bg-[var(--color-secondary)] rounded-t-xl" />
                  <CardHeader><div className="h-4 w-3/4 rounded bg-[var(--color-secondary)]" /></CardHeader>
                </Card>
              ))
            : featured.map((proj) => (
                <Card
                  key={proj.name}
                  className="flex flex-col overflow-hidden hover:border-[var(--color-primary)]/40 hover:-translate-y-1 transition-all duration-200 cursor-pointer p-0"
                  onClick={() => window.open(proj.url, '_blank', 'noopener,noreferrer')}
                >
                  <img
                    src={`https://opengraph.githubassets.com/portfolio/iantolentino/${proj.name}`}
                    alt={proj.name}
                    className="w-full h-36 object-cover border-b border-[var(--color-border)]"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-sm leading-snug">{proj.name}</CardTitle>
                      <ExternalLink size={13} className="shrink-0 mt-0.5 text-[var(--color-muted-foreground)]" />
                    </div>
                    <CardDescription className="text-xs line-clamp-2 mt-1">{proj.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 pb-2">
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="default" className="text-[10px]">{proj.language}</Badge>
                      <Badge variant="secondary" className="text-[10px]">{proj.category}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="text-xs text-[var(--color-muted-foreground)] pt-0">
                    <span className="flex items-center gap-1"><Star size={11} /> {proj.stars}</span>
                    <span className="flex items-center gap-1 ml-3"><GitFork size={11} /> {proj.forks}</span>
                  </CardFooter>
                </Card>
              ))
          }
        </div>

        <Button variant="ghost" asChild>
          <Link to="/projects">View all projects <ArrowRight size={14} /></Link>
        </Button>
      </section>

    </div>
  )
}
