import type {Metadata} from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Lệ Nông Thị | Full-stack Developer',
  description: 'Portfolio of Lệ Nông Thị, a passionate software engineer specializing in backend systems and modern web technologies.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="horse-pattern min-h-screen">
        {children}
      </body>
    </html>
  );
}
