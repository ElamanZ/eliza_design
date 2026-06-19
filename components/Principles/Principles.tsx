'use client';

import { useEffect, useRef } from 'react';
import styles from './Principles.module.css';

const principles = [
  {
    title: 'Комплексный Подход',
    desc: 'От идеи и структуры до готового результата.',
  },
  {
    title: 'Погружение В Проект',
    desc: 'Изучаю нишу, задачи и особенности бизнеса.',
  },
  {
    title: 'Качество В Деталях',
    desc: 'Аккуратный дизайн и внимание к каждой мелочи.',
  },
];

export default function Principles() {
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
    <section id="principles" className={styles.section} ref={sectionRef}>
      <div className="container">
        <h2 className={`${styles.heading} reveal`}>Принципы Работы</h2>

        {/* Grid: [card0][dark][card1][card2] — DOM order matches visual order */}
        <div className={styles.grid}>
          <div className={`${styles.card} reveal`}>
            <h3 className={styles.cardTitle}>{principles[0].title}</h3>
            <p className={styles.cardDesc}>{principles[0].desc}</p>
          </div>

          <div className={`${styles.featuredCard} reveal reveal-delay-1`}>
            <h3 className={styles.featuredTitle}>
              Закрываю Несколько Задач В Одном Проекте
            </h3>
            <p className={styles.featuredDesc}>
              Сайты, логотипы, брендинг и графический дизайн в едином стиле.
            </p>
          </div>

          <div className={`${styles.card} reveal reveal-delay-2`}>
            <h3 className={styles.cardTitle}>{principles[1].title}</h3>
            <p className={styles.cardDesc}>{principles[1].desc}</p>
          </div>

          <div className={`${styles.card} reveal reveal-delay-3`}>
            <h3 className={styles.cardTitle}>{principles[2].title}</h3>
            <p className={styles.cardDesc}>{principles[2].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
