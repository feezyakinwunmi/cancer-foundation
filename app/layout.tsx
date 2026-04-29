// src/app/layout.js
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Childhood Cancer Care & Support Foundation | Giving Hope to Children with Cancer',
  description: 'Providing life-saving support for children with cancer and strength for families across Nigeria.',
  keywords: 'childhood cancer, cancer foundation Nigeria, children with cancer, cancer support',
  authors: [{ name: 'Childhood Cancer Care & Support Foundation' }],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: 'Childhood Cancer Care & Support Foundation',
    description: 'Providing life-saving support for children with cancer across Nigeria.',
    url: 'https://childhoodcancerfoundation.org',
    siteName: 'Childhood Cancer Care & Support Foundation',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Children fighting cancer with hope',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Childhood Cancer Care & Support Foundation',
    description: 'Supporting children with cancer across Nigeria.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}