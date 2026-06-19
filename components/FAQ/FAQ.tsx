'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'Можно Ли Вносить Правки?',
    answer:
      'Да, правки включены в процесс на каждом этапе — по структуре, тексту и дизайну. После разработки возможны дополнительные правки в зависимости от объёма изменений.',
  },
  {
    question: 'Не Знаю, Какой Сайт Нужен — Что Делать?',
    answer:
      'Просто напишите мне! На консультации обсудим ваши задачи, цели и бюджет — вместе определим, какой формат подойдёт лучше всего.',
  },
  {
    question: 'Сколько Времени Займёт Разработка?',
    answer:
      'Сроки зависят от сложности проекта. Одностраничный сайт — от 10 рабочих дней, многостраничный или интернет-магазин — от 3 недель. Точные сроки обсуждаем перед стартом.',
  },
  {
    question: 'Как Происходит Оплата?',
    answer:
      'Работа делится на этапы: предоплата 50% при старте и остаток 50% после завершения. Принимаю оплату в сомах и долларах.',
  },
  {
    question: 'Что Входит В Стоимость?',
    answer:
      'В стоимость входит разработка дизайна, вёрстка, базовая SEO-оптимизация и запуск. Домен и хостинг оплачиваются отдельно.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);
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
    <section id="faq" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.inner}>
          <div className={`${styles.left} reveal`}>
            <h2 className={styles.heading}>Вопросы</h2>
            <p className={styles.desc}>
              Стоимость рассчитается индивидуально — зависит от объёма и сложности проекта
            </p>
          </div>

          <div className={`${styles.right} reveal reveal-delay-1`}>
            {faqs.map((faq, i) => (
              <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.question}</span>
                  <span className={styles.icon}>
                    {openIndex === i ? '✕' : '+'}
                  </span>
                </button>
                <div className={styles.answerWrapper}>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
