import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Professional Portfolio',
  description: 'Built with Next.js, MUI, and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeRegistry>
      </body>
    </html>
  );
}