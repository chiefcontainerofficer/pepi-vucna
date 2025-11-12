import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const transportImages = [
  '/images/transport/Image1.jpeg',
  '/images/transport/Image2.jpeg',
  '/images/transport/Image3.jpeg',
  '/images/transport/Image4.jpeg',
  '/images/transport/Image5.jpeg',
  '/images/transport/Image6.jpeg',
  '/images/transport/Image7.jpeg',
  '/images/transport/Image8.jpeg',
  '/images/transport/Image9.jpeg',
  '/images/transport/Image10.jpeg',
  '/images/transport/Image11.jpeg',
  '/images/transport/Image13.jpeg',
  '/images/transport/Image14.jpeg',
  '/images/transport/Image15.jpeg',
  '/images/transport/Image16.jpeg',
  '/images/transport/Image17.jpeg',
];

const features = [
  {
    title: 'Polasci iz Istre',
    description: 'Prema svim gradovima u Hrvatskoj i povratno'
  },
  {
    title: 'Osiguran teret',
    description: 'Teret je osiguran tijekom cijelog transporta'
  },
  {
    title: 'Fleksibilni termini',
    description: 'Hitne vožnje i fleksibilni termini preuzimanja 24/7'
  },
  {
    title: 'Račun za svaku uslugu',
    description: 'Izdajemo račun za sve naše usluge'
  }
];

const services = [
  {
    title: 'Prijevoz osobnih i lakih teretnih vozila',
    description: 'Siguran i profesionalan prijevoz vaših vozila'
  },
  {
    title: 'Prijevoz karamboliranih i neispravnih vozila',
    description: 'Specijalizirani prijevoz oštećenih vozila'
  },
  {
    title: 'Prijevoz građevinskih i poljoprivrednih strojeva',
    description: 'Transport teških strojeva i opreme'
  },
  {
    title: 'Prijevoz kamp-kućica, prikolica i motocikala',
    description: 'Prijevoz rekreacijskih vozila i opreme'
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
    title: 'Sitni popravci vozila',
    description: 'Nudimo usluge sitnih popravaka vozila na lokaciji kada je to moguće.'
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

  return (
    <>
      <Head>
        <title>Povoljan i siguran transport iz Istre prema cijeloj Hrvatskoj | PEPI Vuča i pomoć na cesti</title>
        <meta name="description" content="Pouzdan prijevoz vozila, strojeva, kamp-kućica, motocikala i drugog tereta iz Istre prema svim gradovima u Hrvatskoj i povratno. Brza, sigurna i profesionalna usluga 24/7." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="min-h-screen bg-black">
        {/* Hero Section with Image Carousel */}
        <section className="relative w-full min-h-screen overflow-hidden">
          {transportImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image 
                src={image} 
                alt={`Transport vozila ${index + 1}`}
                fill
                priority={index === 0}
                className="object-contain"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
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
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
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
        <section className="bg-black py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ostali ste u kvaru, probušili ste gumu ili zaključali ključeve u vozilu?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed">
              Mi smo tu da vam pomognemo. 24 sata u danu, 7 dana na tjednu, 365 dana u godini.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 sm:py-12 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Zašto odabrati nas?</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto group">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border-l-4 border-primary pl-6 py-4 hover:border-primary-dark transition-all duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-base md:max-h-0 md:opacity-0 md:overflow-hidden md:group-hover:max-h-96 md:group-hover:opacity-100 md:group-hover:mt-2 transition-all duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 sm:py-12 pb-12 sm:pb-16 md:pb-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Naše usluge</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto group">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border-l-4 border-primary pl-6 py-4 hover:border-primary-dark transition-all duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/70 text-base md:max-h-0 md:opacity-0 md:overflow-hidden md:group-hover:max-h-96 md:group-hover:opacity-100 md:group-hover:mt-2 transition-all duration-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
} 