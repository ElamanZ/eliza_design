'use client';

import { useEffect, useRef } from 'react';
import SafeImage from '@/components/ui/SafeImage';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Baiyr — Производство Мёда',
    subtitle: 'Многостраничный сайт + каталог с покупкой',
    image: '/images/project-baiyr.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Stam Textile –',
    subtitle: 'Одностраничный сайт для швейного производства',
    image: '/images/project-stam1.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Stam Textile –',
    subtitle: 'Одностраничный сайт для швейного производства',
    image: '/images/project-stam2.jpg',
    link: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <div className="container">
        <h2 className={`${styles.heading} reveal`}>Проекты</h2>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`${styles.card} reveal reveal-delay-${i + 1}`}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardText}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardSubtitle}>{project.subtitle}</p>
                  </div>
                  <span className={styles.cardCta}>
                    Открыть сайт
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9.5" stroke="currentColor"/>
                      <path d="M7 10h6M10 7l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
