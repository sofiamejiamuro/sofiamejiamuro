import Header from "@/components/header";
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sofia Mejia-Muro | Portfolio',
  description: 'Sofia Mejia-Muro is a Conversational AI Solutions Consultant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={
        `${inter.className} bg-glassBg text-gray-950 relative 
        
        bg-no-repeat bg-cover bg-center bg-fixed
        `}>
        {/*
        <div className='bg-[#f0abfc] absolute top-[-6rem] -z-10 right-[-25rem] h-[40rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#fbcfe8]'></div>
        <div className="bg-[#f0abfc] absolute top-[-6rem] -z-10 left-[-35rem] h-[40rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
  */}
        <ThemeContextProvider>  
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <SpeedInsights />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
};