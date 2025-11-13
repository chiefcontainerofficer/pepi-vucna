import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t-2 border-primary py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-bold text-white mb-3">PEPI, obrt za vuču vozila</h3>
            <p className="text-white/80 text-sm mb-1">vl. Stjepan Percač</p>
            <p className="text-white/80 text-sm mb-1">Melnica, Melnica 15 A</p>
            <p className="text-white/80 text-sm mb-1">Hrvatska</p>
            <p className="text-white/80 text-sm mb-1">Kontakt: <a href="tel:+385994055109" className="text-primary hover:text-primary-dark font-semibold">+385 99 4055 109</a></p>
            <p className="text-white/80 text-sm mb-1 flex items-center gap-2">
              <span>Poruka:</span>
              <a 
                href="https://wa.me/385994055109" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark font-semibold flex items-center gap-1"
                aria-label="WhatsApp"
              >
                <Image
                  src="/images/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span>WhatsApp</span>
              </a>
              <span>/</span>
              <a 
                href="viber://chat?number=+385994055109" 
                className="text-primary hover:text-primary-dark font-semibold flex items-center gap-1"
                aria-label="Viber"
              >
                <Image
                  src="/images/viber.svg"
                  alt="Viber"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span>Viber</span>
              </a>
            </p>
          </div>
        </div>
      


        <div className="border-t border-primary/30 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/70">
            <div>&copy; {new Date().getFullYear()} PEPI, obrt za vuču vozila, vl. Stjepan Percač powered by <a href="https://disketa.hr" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-primary">disketa.hr</a> Sva prava pridržana.</div>
            <div className="flex mt-2 md:mt-0 space-x-4">
              <Link href="/privacy-policy" className="hover:text-primary">Privatnost</Link>
              <Link href="/cookie-policy" className="hover:text-primary">Kolačići</Link>
              <Link href="/terms" className="hover:text-primary">Uvjeti korištenja</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 