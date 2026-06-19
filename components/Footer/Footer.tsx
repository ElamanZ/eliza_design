'use client';

import { useEffect, useRef } from 'react';
import styles from './Footer.module.css';

const socialLinks = [
  { href: 'https://t.me/', label: 'Telegram' },
  { href: 'https://wa.me/', label: 'Whatsapp' },
  { href: 'https://instagram.com/', label: 'Instagram' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.star1}>✦</div>
      <div className={styles.star2}>✦</div>
      <div className={styles.star3}>✦</div>

      <div className={`container ${styles.inner}`}>
        <div className={`${styles.topRow} reveal`}>
          <h2 className={styles.heading}>Поработаем<br />вместе?</h2>
          <button className={styles.scrollTop} onClick={scrollToTop}>
            Наверх ↑
          </button>
        </div>

        <p className={`${styles.subtext} reveal reveal-delay-1`}>
          Подберём оптимальное решение<br />под ваши задачи и бюджет
        </p>

        <div className={`${styles.actions} reveal reveal-delay-2`}>
          <a
            href="https://t.me/"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Обсудить проект
          </a>

          <div className={styles.socials}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.starBottom}>✦</div>
    </footer>
  );
}
