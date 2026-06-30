import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { User, FolderOpen, Wrench, Briefcase, Mail, Sun, Moon, Menu, X } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { cn } from '@/lib/utils'
import { ContactModal } from '@/components/ContactModal'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About', icon: User },
  { to: '/skills', label: 'Skills', icon: Wrench },
  { to: '/experience', label: 'Experience', icon: Briefcase },
  { to: '/projects', label: 'Projects', icon: FolderOpen },
  { to: '/contact', label: 'Contact', icon: Mail },
]

export function Navbar() {
  const location = useLocation()
  const [light, setLight] = useState(() => {
    if (typeof window === 'undefined') return true
    return localStorage.getItem('theme') !== 'dark'
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  useEffect(() => {
    if (light) {
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    }
  }, [light])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  const iconBtn = 'flex h-8 w-8 items-center justify-center border-2 border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors'

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 border-[var(--color-border)] bg-[var(--color-background)]">
        <div className="mx-auto flex h-12 max-w-6xl items-center gap-4 px-3 sm:px-6">

          {/* Logo — terminal style [IT_] */}
          <NavLink to="/" className="shrink-0 flex items-center border-2 border-[var(--color-foreground)] px-2 py-1 font-mono text-sm font-bold text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors select-none">
            IT<span className="ml-0.5 inline-block w-2 h-[1em] bg-current align-middle" />
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-0 flex-1 justify-end mr-4">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={label === 'Contact' ? (e) => { e.preventDefault(); setContactModalOpen(true) } : undefined}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-1 text-xs font-bold uppercase tracking-widest transition-all duration-150',
                    isActive
                      ? 'bg-[var(--color-foreground)] text-[var(--color-background)]'
                      : 'text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]'
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right — theme toggle + mobile hamburger */}
          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <button
              className={iconBtn}
              onClick={() => setLight((v) => !v)}
              aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {light ? <Moon size={15} /> : <Sun size={15} />}
            </button>

            {/* Mobile hamburger */}
            <button
              className={cn(iconBtn, 'sm:hidden')}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 sm:hidden transition-all duration-200',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div
          className={cn(
            'absolute top-12 left-0 right-0 bg-[var(--color-background)] border-b-2 border-[var(--color-border)] transition-all duration-200',
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-2'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={label === 'Contact' ? (e) => { e.preventDefault(); setMobileMenuOpen(false); setContactModalOpen(true) } : undefined}
                className={({ isActive }) =>
                  cn(
                    'px-6 py-3 text-sm font-bold uppercase tracking-widest border-b border-[var(--color-border)] transition-colors',
                    isActive
                      ? 'bg-[var(--color-foreground)] text-[var(--color-background)]'
                      : 'text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]'
                  )
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="flex items-center gap-3 px-6 py-3">
              <a href="https://github.com/iantolentino" target="_blank" rel="noopener noreferrer"
                className={iconBtn} aria-label="GitHub">
                <GithubIcon size={15} />
              </a>
              <a href="https://www.linkedin.com/in/iantolentino" target="_blank" rel="noopener noreferrer"
                className={iconBtn} aria-label="LinkedIn">
                <LinkedinIcon size={15} />
              </a>
            </div>
          </nav>
        </div>
      </div>

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  )
}
