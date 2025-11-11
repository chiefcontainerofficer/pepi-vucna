import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex-1 w-full [&_p]:text-justify [&_li]:text-justify">
        {children}
      </div>
      <Footer />
    </>
  );
} 