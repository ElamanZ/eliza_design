'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { href: '#projects', label: 'Проекты' },
  { href: '#services', label: 'Услуги' },
  { href: '#principles', label: 'Этапы Работы' },
  { href: '#reviews', label: 'Отзывы' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Элиза
        </a>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? '✕' : 'Меню'}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
