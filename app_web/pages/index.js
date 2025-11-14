import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';

const transportImages = [
  '/images/transport/Image2.webp',
  '/images/transport/Image3.webp',
  '/images/transport/Image4.webp',
  '/images/transport/Image5.webp',
  '/images/transport/Image6.webp',
  '/images/transport/Image7.webp',
  '/images/transport/Image8.webp',
  '/images/transport/Image9.webp',
  '/images/transport/Image10.webp',
  '/images/transport/Image11.webp',
  '/images/transport/Image13.webp',
  '/images/transport/Image14.webp',
  '/images/transport/Image15.webp',
  '/images/transport/Image16.webp',
  '/images/transport/Image17.webp',
];

const features = [
  {
    title: 'Osiguran teret',
    description: 'Teret je osiguran tijekom cijelog transporta'
  },
  {
    title: 'Polasci iz Istre',
    description: 'Prema svim gradovima u Hrvatskoj i povratno'
  },
  {
    title: 'Fleksibilni termini',
    description: 'Hitne vožnje i fleksibilni termini preuzimanja 24/7'
  },
  {
    title: 'Kapacitet do 2500kg',
    description: 'Prijevoz tereta do 2500kg težine'
  },
  {
    title: 'Račun za svaku uslugu',
    description: 'Izdajemo račun za sve naše usluge'
  }
];

const services = [
  {
    title: 'Prijevoz karamboliranih i neispravnih vozila',
    description: 'Specijalizirani prijevoz oštećenih vozila'
  },
  {
    title: 'Prijevoz kamp-kućica, prikolica i motocikala',
    description: 'Prijevoz rekreacijskih vozila i opreme'
  },
  {
    title: 'Prijevoz osobnih i lakih teretnih vozila',
    description: 'Siguran i profesionalan prijevoz vaših vozila'
  },
  {
    title: 'Prijevoz građevinskih i poljoprivrednih strojeva',
    description: 'Transport teških strojeva i opreme'
  },
  {
    title: 'Prijevoz robe, namještaja i ostale opreme',
    description: 'Transport robe, namještaja i ostale opreme poput paleta, kutija i drugih paketa'
  },
  {
    title: 'Paljenje vozila i zamjena akumulatora na cesti',
    description: 'Vaše vozilo se neće upaliti? Naš tim će doći na lokaciju i pomoći vam s paljenjem vozila ili zamjenom akumulatora.'
  },
  {
    title: 'Krpanje gume na cesti',
    description: 'Probušena guma? Nudimo uslugu krpanja gume direktno na mjestu gdje se nalazite, bez potrebe za vučom.'
  },
  {
    title: 'Otključavanje vozila',
    description: 'Zaključali ste ključeve u vozilu? Naš stručni tim će vam pomoći da otključate vozilo bez oštećenja.'
  },
  {
    title: 'Ispumpavanje pogrešno natočenog goriva',
    description: 'Natočili ste pogrešno gorivo? Brzo ćemo ispumpati gorivo iz vašeg vozila i osigurati da možete nastaviti putovanje.'
  },
  {
    title: 'Brzi popravci vozila na cesti',
    description: 'Nudimo usluge brzih popravaka vozila na cesti kada je to moguće.'
  }
];

const heroTexts = [
  {
    title: 'VUČNA SLUŽBA',
    subtitle: 'Pomoć na cesti'
  },
  {
    title: 'PROFESIONALAN PRIJEVOZ VOZILA',
    subtitle: 'Brza i sigurna usluga 24/7'
  },
  {
    title: 'PRIJEVOZ STROJEVA I TERETA',
    subtitle: 'Od Istre do svih gradova u Hrvatskoj'
  },
  {
    title: 'POUZDAN TRANSPORT',
    subtitle: 'Osiguran teret i profesionalna usluga'
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  // Hardcoded Amber Tint filter
  const imageFilter = 'sepia(0.35) saturate(1.25) brightness(1.08) contrast(1.12) hue-rotate(-8deg)';


  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % transportImages.length);
    }, 10000); // Change image every 10 seconds

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 8000); // Change text every 8 seconds

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when near the top of the page (within 300px from top)
      setShowScrollButton(window.scrollY < 300);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PEPI Vučna Služba",
    "legalName": "PEPI, obrt za vuču vozila, vl. Stjepan Percač",
    "image": "https://pepi.hr/images/logo.png",
    "description": "Pouzdan prijevoz vozila, strojeva, kamp-kućica, motocikala i drugog tereta do 2500kg iz Istre prema svim gradovima u Hrvatskoj i povratno. Brza, sigurna i profesionalna usluga 24/7.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Melnica 15 A",
      "addressLocality": "Melnica",
      "addressRegion": "Istra",
      "addressCountry": "HR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.1125,
      "longitude": 14.0181
    },
    "url": "https://pepi.hr",
    "telephone": "+385994055109",
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": {
      "@type": "Country",
      "name": "Hrvatska"
    },
    "serviceType": [
      "Vučna služba",
      "Prijevoz vozila",
      "Pomoć na cesti",
      "Prijevoz strojeva",
      "Prijevoz kamp-kućica",
      "Prijevoz motocikala",
      "Paljenje vozila",
      "Krpanje gume",
      "Otključavanje vozila"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usluge vučne službe",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <SEO
        title="Povoljan i siguran transport iz Istre prema cijeloj Hrvatskoj | PEPI Vuča i pomoć na cesti"
        description="Pouzdan prijevoz vozila, strojeva, kamp-kućica, motocikala i drugog tereta do 2500kg iz Istre prema svim gradovima u Hrvatskoj i povratno. Brza, sigurna i profesionalna usluga 24/7."
        url="/"
        structuredData={structuredData}
      />
      <main className="min-h-screen bg-black">
        {/* Hero Section with Image Carousel */}
        <section className="relative w-full h-[50vh] sm:h-[70vh] max-h-[800px] overflow-hidden bg-black">
          {transportImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Blurred background layer for edge extension */}
              <Image 
                src={image} 
                alt=""
                fill
                priority={index === 0}
                className="object-cover scale-110"
                sizes="100vw"
                aria-hidden="true"
                style={{ 
                  filter: `${imageFilter} blur(40px)`,
                  opacity: 0.6
                }}
              />
              {/* Main sharp image */}
              <Image 
                src={image} 
                alt={`Profesionalan prijevoz vozila i tereta iz Istre - PEPI Vučna Služba ${index + 1}`}
                fill
                priority={index === 0}
                className="object-contain relative z-10"
                sizes="100vw"
                style={{ filter: imageFilter }}
              />
              <div className="absolute inset-0 bg-black/40 z-20"></div>
            </div>
          ))}
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
            {/* Text Content */}
            <div className="text-center px-4 max-w-5xl w-full mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 drop-shadow-2xl transition-opacity duration-1000">
                {heroTexts[currentTextIndex].title}
              </h1>
              <div className="flex justify-center">
                <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold drop-shadow-xl text-center transition-opacity duration-1000">
                  {heroTexts[currentTextIndex].subtitle}
                </p>
              </div>
            </div>
            {/* Fixed Buttons */}
            <div className="flex flex-row gap-3 justify-center px-4">
              <a 
                href="tel:+385994055109" 
                className="inline-block bg-primary text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-2xl hover:bg-primary-dark active:scale-95 transition text-base sm:text-lg md:text-xl min-h-[44px] flex items-center justify-center"
              >
                Nazovite nas
              </a>
              <Link 
                href="/contact" 
                className="inline-block bg-primary text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-2xl hover:bg-primary-dark active:scale-95 transition text-base sm:text-lg md:text-xl min-h-[44px] flex items-center justify-center"
              >
                Pošaljite upit
              </Link>
            </div>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
            {transportImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all min-w-[8px] min-h-[8px] ${
                  index === currentImageIndex 
                    ? 'w-8 sm:w-10 bg-primary' 
                    : 'w-2 sm:w-2.5 bg-white/50 hover:bg-white/75 active:bg-white'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-black py-4 sm:py-6">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ostali ste u kvaru, probušili ste gumu ili zaključali ključeve u vozilu?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed">
              Mi smo tu da vam pomognemo. 24 sata u danu, 7 dana u tjednu, 365 dana u godini.
            </p>
          </div>
        </section>

        {showScrollButton && (
          <div className="text-center mt-4 mb-4">
            <a
            href="#zasto-odabrati-nas"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('zasto-odabrati-nas');
              if (element) {
                const headerOffset = 40; // Approximate header height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-flex flex-col items-center justify-center bg-primary text-black font-bold w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl hover:bg-primary-dark active:scale-95 transition-all duration-300 border-2 border-black"
            aria-label="Zašto odabrati nas"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.1s' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.2s' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
        )}

        {/* Features Section */}
        <section id="zasto-odabrati-nas" className="py-4 sm:py-6 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Zašto odabrati nas?</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 max-w-6xl mx-auto group">
              {features.map((feature, index) => {
                const isRight = index % 2 !== 0;
                return (
                  <div
                    key={index}
                    className={`${isRight ? 'border-r-4 pr-6' : 'border-l-4 pl-6'} border-primary py-4 hover:border-primary-dark transition-all duration-300`}
                  >
                    <div className={`${isRight ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/70 text-base md:max-h-0 md:opacity-0 md:overflow-hidden md:group-hover:max-h-96 md:group-hover:opacity-100 md:group-hover:mt-2 transition-all duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="nase-usluge" className="py-4 sm:py-6 pb-6 sm:pb-8 md:pb-10 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Naše usluge</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 max-w-6xl mx-auto group">
              {services.map((service, index) => {
                const isRight = index % 2 !== 0;
                return (
                  <div
                    key={index}
                    className={`${isRight ? 'border-r-4 pr-6' : 'border-l-4 pl-6'} border-primary py-4 hover:border-primary-dark transition-all duration-300`}
                  >
                    <div className={`${isRight ? 'md:flex md:flex-col md:items-end md:text-right' : ''}`}>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-white/70 text-base md:max-h-0 md:opacity-0 md:overflow-hidden md:group-hover:max-h-96 md:group-hover:opacity-100 md:group-hover:mt-2 transition-all duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>
    </>
  );
} 