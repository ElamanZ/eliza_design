import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Элиза — Дизайнер | Разработка сайтов, Брендинг, Логотипы',
  description:
    'Делаю проекты любой сложности с вниманием к деталям и качеству. Разработка сайтов от идеи до запуска, брендинг, логотипы, графический дизайн.',
  keywords: [
    'дизайнер',
    'разработка сайтов',
    'брендинг',
    'логотипы',
    'графический дизайн',
    'Элиза',
    'веб-дизайн',
  ],
  authors: [{ name: 'Элиза' }],
  openGraph: {
    title: 'Элиза — Дизайнер | Разработка сайтов, Брендинг, Логотипы',
    description:
      'Делаю проекты любой сложности с вниманием к деталям и качеству. Разработка сайтов от идеи до запуска, брендинг, логотипы, графический дизайн.',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Элиза — Дизайнер',
    description: 'Разработка сайтов, брендинг, логотипы, графический дизайн',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
