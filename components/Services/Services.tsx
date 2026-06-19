'use client';

import { useEffect, useRef } from 'react';
import SafeImage from '@/components/ui/SafeImage';
import styles from './Services.module.css';

const services = [
  {
    id: 1,
    title: 'Одностраничный Сайт',
    desc: 'Сайт-визитка, лендинг или промо-страница для презентации компании, услуги или продукта.',
    days: 'от 10 дней рабочих дней',
    price: 'от 100$\nот 8 000 сом',
    image: '/images/service-laptop.jpg',
  },
  {
    id: 2,
    title: 'Одностраничный Сайт',
    desc: 'Полноценный сайт с несколькими разделами: услуги, о компании, контакты и другие страницы.',
    days: 'от 10 дней рабочих дней',
    price: 'от 150$\nот 13 000 сом',
    image: '/images/service-laptop.jpg',
  },
  {
    id: 3,
    title: 'Интернет-Магазин',
    desc: 'Сайт с каталогом товаров, корзиной, оформлением заказа и необходимым функционалом для продаж.',
    days: 'от 10 дней рабочих дней',
    price: 'от 150$\nот 13 000 сом',
    image: '/images/service-laptop.jpg',
  },
  {
    id: 4,
    title: 'Логотип',
    desc: 'Разработка уникального логотипа, который отражает ценности и характер вашего бренда.',
    days: 'от 5 дней рабочих дней',
    price: 'от 70$\nот 6 000 сом',
    image: null,
  },
  {
    id: 5,
    title: 'Брендинг',
    desc: 'Создание фирменного стиля: логотип, цвета, типографика, носители и бренд-гайд.',
    days: 'от 10 дней рабочих дней',
    price: 'от 150$\nот 13 000 сом',
    image: null,
  },
  {
    id: 6,
    title: 'Графический Дизайн',
    desc: 'Дизайн визиток, баннеров, буклетов, упаковки, меню, презентаций и других материалов.',
    days: 'от 2-7 дней рабочих дней',
    price: 'рассчитывается\nиндивидуально',
    image: null,
  },
];

export default function Services() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <h2 className={styles.heading}>УСЛУГИ И СТОИМОСТЬ</h2>
          <p className={styles.subheading}>
            Стоимость рассчитается индивидуально —<br />зависит от объёма и сложности проекта
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className={styles.imageWrapper}>
                {service.image ? (
                  <SafeImage
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                ) : (
                  <div className={styles.imagePlaceholder} />
                )}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>

                <div className={styles.cardMeta}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaIcon}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M1 5.5h12" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M4.5 1v2M9.5 1v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span>{service.days}</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span className={styles.metaIcon}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M7 4.5v5M5 6.5c0-.83.9-1.5 2-1.5s2 .67 2 1.5-.9 1.5-2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className={styles.price}>
                      {service.price.split('\n').map((line, j) => (
                        <span key={j}>{line}{j < service.price.split('\n').length - 1 && <br />}</span>
                      ))}
                    </span>
                  </div>
                </div>

                <div className={styles.cardDivider} />
                <a
                  href="https://t.me/"
                  className={styles.cardCta}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Обсудить проект
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
