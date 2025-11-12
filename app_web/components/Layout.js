import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header />
      <div className="flex-1 w-full [&_p]:text-justify [&_li]:text-justify">
        {children}
      </div>
      <Footer />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-primary text-black rounded-full shadow-2xl hover:bg-primary-dark transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-black"
          aria-label="Na vrh"
        >
          <svg 
            className="w-6 h-6 sm:w-7 sm:h-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
} 