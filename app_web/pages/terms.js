import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Uvjeti korištenja | PEPI Vučna Služba</title>
        <meta name="description" content="Uvjeti korištenja web stranice PEPI Vučna Služba. Prava i obveze korisnika." />
      </Head>
      <main className="min-h-screen bg-black px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Uvjeti korištenja</h1>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Prihvaćanje uvjeta</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Korištenjem ove web stranice pristajete na ove uvjete korištenja. Ako se ne slažete s bilo kojim dijelom ovih uvjeta, molimo vas da ne koristite našu web stranicu.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Intelektualno vlasništvo</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Svi sadržaji na ovoj web stranici, uključujući tekst, grafike, logotipe, ikone, slike, audio i video zapise, softver i ostale materijale, vlasništvo su PEPI, obrt za vuču vozila, vl. Stjepan Percač ili su korišteni uz dopuštenje vlasnika. Zabranjeno je kopiranje, distribucija, modificiranje ili bilo kakvo drugo korištenje sadržaja bez izričitog pismenog odobrenja.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Ograničenje odgovornosti</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Informacije na ovoj web stranici pružene su "kakve jesu" bez ikakvih jamstava, izričitih ili impliciranih. PEPI, obrt za vuču vozila, vl. Stjepan Percač ne jamči točnost, potpunost ili korisnost informacija na ovoj web stranici. Nismo odgovorni za bilo kakvu štetu koja može nastati kao posljedica korištenja ili nemogućnosti korištenja naše web stranice.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Vanjske poveznice</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Naša web stranica može sadržavati poveznice na vanjske web stranice koje nisu pod našom kontrolom. Ne preuzimamo odgovornost za sadržaj, politike privatnosti ili prakse bilo koje web stranice treće strane. Uključivanje bilo koje poveznice ne podrazumijeva našu preporuku ili odobrenje te web stranice.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Izmjene uvjeta korištenja</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Zadržavamo pravo izmjene ovih uvjeta korištenja u bilo kojem trenutku. Promjene stupaju na snagu objavljivanjem na ovoj web stranici. Vaša odgovornost je povremeno provjeriti ove uvjete kako biste bili informirani o eventualnim izmjenama.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Primjenjivo pravo</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Ovi uvjeti korištenja uređeni su i tumače se u skladu sa zakonima Republike Hrvatske. Svi sporovi koji proizlaze iz ili su povezani s korištenjem naše web stranice podliježu isključivoj nadležnosti sudova u Republici Hrvatskoj.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Kontakt informacije</h2>
            <p className="text-white/80 leading-relaxed">
              Ako imate pitanja o ovim uvjetima korištenja, molimo vas da nas kontaktirate na: <br />
              Telefon: <a href="tel:+385994055109" className="text-primary hover:underline font-semibold">+385 99 4055 109</a> <br />
              Adresa: Melnica, Melnica 15 A, Hrvatska
            </p>
          </section>
        </div>
      </main>
    </>
  );
} 