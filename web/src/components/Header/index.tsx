'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './index.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Nossos Produtos', href: '/produtos' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <div className={styles.headerInner}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" className={`${styles.logoLink} ${isScrolled ? styles.logoLinkScrolled : ''}`}>
              <img src="/logo_francal/logo_francal01.png" alt="Francal Distribuidora" className={styles.logoImage} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.navigation}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${isScrolled ? styles.navLinkScrolled : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${styles.mobileMenuButton} ${isScrolled ? styles.mobileMenuButtonScrolled : ''}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
