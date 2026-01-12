import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from '@/components/layout/Navbar';

// FIX: Import the REAL Footer from layout, not Contact
import Footer from '@/components/layout/Footer'; 
import ScrollToTop from '@/components/ui/ScrollToTop';

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
            <ScrollToTop />
          </SmoothScroll>
        </ThemeRegistry>
      </body>
    </html>
  );
}