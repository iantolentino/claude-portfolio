import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Home, User, FolderOpen, Wrench, Briefcase, Mail, Sun, Moon } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { cn } from '@/lib/utils'

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About', icon: User },
  { to: '/projects', label: 'Projects', icon: FolderOpen },
  { to: '/skills', label: 'Skills', icon: Wrench },
  { to: '/experience', label: 'Experience', icon: Briefcase },
]

export function Navbar() {
  const [light, setLight] = useState(() => {
    if (typeof window === 'undefined') return true
    return localStorage.getItem('theme') !== 'dark'
  })

  useEffect(() => {
    if (light) {
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    }
  }, [light])

  const iconBtn = 'flex h-9 w-9 items-center justify-center text-[var(--color-muted-foreground)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)] transition-colors'

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-3 sm:px-6">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group shrink-0">
          <span className={`flex h-8 w-8 items-center justify-center border-2 text-sm font-bold leading-none select-none ${
            light
              ? 'bg-[var(--color-foreground)] text-[var(--color-background)] border-[var(--color-foreground)]'
              : 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-primary)]'
          }`}>
            IT
          </span>
          <span className="hidden sm:block font-semibold text-[var(--color-foreground)] tracking-tight group-hover:text-[var(--color-primary)] transition-colors">
            Ian Tolentino
          </span>
        </NavLink>

        {/* Desktop nav — full text */}
        <nav className="hidden sm:flex items-center gap-1 flex-1 justify-center">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-all duration-150',
                  isActive
                    ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-2 border-[var(--color-primary)]/30'
                    : 'text-[var(--color-muted-foreground)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]'
                )
              }
            >
              <Icon size={15} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile nav — icon only, centred */}
        <nav className="flex sm:hidden items-center gap-0.5 flex-1 justify-center">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              aria-label={label}
              className={({ isActive }) =>
                cn(
                  'flex h-9 w-9 items-center justify-center transition-colors',
                  isActive
                    ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 border-2 border-[var(--color-primary)]/30'
                    : 'text-[var(--color-muted-foreground)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]'
                )
              }
            >
              <Icon size={18} />
            </NavLink>
          ))}
        </nav>

        {/* Right — theme + socials */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          <button
            className={iconBtn}
            onClick={() => setLight((v) => !v)}
            aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a href="https://github.com/iantolentino" target="_blank" rel="noopener noreferrer"
            className={iconBtn} aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/iantolentino" target="_blank" rel="noopener noreferrer"
            className={cn(iconBtn, 'hidden sm:flex')} aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:iantolentino0110@gmail.com"
            className={cn(iconBtn, 'hidden sm:flex')} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  )
}
