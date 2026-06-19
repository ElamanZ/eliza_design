'use client';

import { useState, useEffect, useRef } from 'react';
import SafeImage from '@/components/ui/SafeImage';
import styles from './Reviews.module.css';

const reviews = [
  {
    id: 1,
    name: 'Айгерим',
    role: 'Владелец бизнеса',
    text: 'Элиза сделала потрясающий сайт для нашей компании! Всё чётко, в срок, и дизайн превзошёл ожидания. Очень рекомендую.',
    photo: '/images/review-1.jpg',
  },
  {
    id: 2,
    name: 'Марат',
    role: 'Основатель Baiyr Honey',
    text: 'Работала над брендингом и сайтом для нашего бренда мёда. Получилось стильно и современно. Элиза вникла в суть бизнеса.',
    photo: '/images/review-2.jpg',
  },
  {
    id: 3,
    name: 'Сабина',
    role: 'Директор Stam Textile',
    text: 'Профессиональный подход, качественный результат. Сайт работает отлично, клиенты отмечают дизайн. Спасибо!',
    photo: '/images/review-3.jpg',
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
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

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const review = reviews[current];

  return (
    <section id="reviews" className={styles.section} ref={sectionRef}>
      <div className="container">
        <h2 className={`${styles.heading} reveal`}>Отзывы</h2>

        <div className={`${styles.slider} reveal reveal-delay-1`}>
          {/* Author photo */}
          <div className={styles.photoWrapper}>
            <SafeImage
              src={review.photo}
              alt={review.name}
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="(max-width: 768px) 160px, 260px"
            />
          </div>

          {/* Navigation */}
          <div className={styles.controls}>
            <button className={styles.arrow} onClick={prev} aria-label="Предыдущий отзыв">
              ←
            </button>
            <button className={styles.arrow} onClick={next} aria-label="Следующий отзыв">
              →
            </button>
          </div>

          {/* Review card */}
          <div className={styles.card} key={current}>
            <p className={styles.reviewText}>&ldquo;{review.text}&rdquo;</p>
            <div className={styles.reviewMeta}>
              <span className={styles.reviewName}>{review.name}</span>
              <span className={styles.reviewRole}>{review.role}</span>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Отзыв ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
