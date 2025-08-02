import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalaxyBackground from '@/components/GalaxyBackground';

export const metadata: Metadata = {
  title: 'Trần Văn Khải - Network Security Portfolio',
  description: 'Portfolio của Trần Văn Khải - Sinh viên ngành An Ninh Mạng tại Đại học Ngoại ngữ - Tin học TP.HCM',
  keywords: 'network security, cybersecurity, portfolio, web developer, IT student',
  authors: [{ name: 'Trần Văn Khải' }],
  openGraph: {
    title: 'Trần Văn Khải - Network Security Portfolio',
    description: 'Portfolio của Trần Văn Khải - Sinh viên ngành An Ninh Mạng',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="font-inter">
        <GalaxyBackground />
        <div className="content-overlay">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}