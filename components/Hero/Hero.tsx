'use client';

import { useEffect, useRef } from 'react';
import SafeImage from '@/components/ui/SafeImage';
import styles from './Hero.module.css';

const floatingLabels = [
  { text: 'Опыт 2+ лет', className: styles.tagExperience },
  { text: 'Разработка сайтов —\nот идеи до запуска', className: styles.tagWebdev },
  { text: 'Брендинг', className: styles.tagBranding },
  { text: 'Графический Дизайн', className: styles.tagGraphic },
  { text: 'Логотипы', className: styles.tagLogos },
];

const socialLinks = [
  { href: 'https://t.me/', label: 'Telegram' },
  { href: 'https://wa.me/', label: 'Whatsapp' },
  { href: 'https://instagram.com/', label: 'Instagram' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add(styles.loaded);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.gradientOrb} />

      <div className={`container ${styles.inner}`}>
        {/* Floating skill labels */}
        {floatingLabels.map((tag, i) => (
          <span key={i} className={`${styles.tag} ${tag.className}`}>
            {tag.text.split('\n').map((line, j) => (
              <span key={j}>{line}{j < tag.text.split('\n').length - 1 && <br />}</span>
            ))}
          </span>
        ))}

        {/* Main title */}
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>
            <span className={styles.titlePurple}>Дизайнер</span>
            <span className={styles.titleBlack}>Элиза</span>
          </h1>
        </div>

        {/* Right side: description + photo */}
        <div className={styles.rightBlock}>
          <p className={styles.description}>
            Делаю проекты любой сложности, с вниманием к деталям и качеству.
          </p>
          <div className={styles.photoWrapper}>
            <SafeImage
              src="/images/eliza.jpg"
              alt="Элиза — Дизайнер"
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
        </div>
      </div>

      {/* CTA + Socials */}
      <div className={`container ${styles.bottom}`}>
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
    </section>
  );
}
