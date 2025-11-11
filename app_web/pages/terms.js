import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Uvjeti korištenja | PEPI Transport</title>
        <meta name="description" content="Uvjeti korištenja web stranice PEPI Transport. Prava i obveze korisnika." />
      </Head>
      <main className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Uvjeti korištenja</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Prihvaćanje uvjeta</h2>
            <p className="text-gray-700 mb-4">
              Korištenjem ove web stranice pristajete na ove uvjete korištenja. Ako se ne slažete s bilo kojim dijelom ovih uvjeta, molimo vas da ne koristite našu web stranicu.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Intelektualno vlasništvo</h2>
            <p className="text-gray-700 mb-4">
              Svi sadržaji na ovoj web stranici, uključujući tekst, grafike, logotipe, ikone, slike, audio i video zapise, softver i ostale materijale, vlasništvo su PEPI, obrt za vuču vozila, vl. Stjepan Percač ili su korišteni uz dopuštenje vlasnika. Zabranjeno je kopiranje, distribucija, modificiranje ili bilo kakvo drugo korištenje sadržaja bez izričitog pismenog odobrenja.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Ograničenje odgovornosti</h2>
            <p className="text-gray-700 mb-4">
              Informacije na ovoj web stranici pružene su "kakve jesu" bez ikakvih jamstava, izričitih ili impliciranih. PEPI, obrt za vuču vozila, vl. Stjepan Percač ne jamči točnost, potpunost ili korisnost informacija na ovoj web stranici. Nismo odgovorni za bilo kakvu štetu koja može nastati kao posljedica korištenja ili nemogućnosti korištenja naše web stranice.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Vanjske poveznice</h2>
            <p className="text-gray-700 mb-4">
              Naša web stranica može sadržavati poveznice na vanjske web stranice koje nisu pod našom kontrolom. Ne preuzimamo odgovornost za sadržaj, politike privatnosti ili prakse bilo koje web stranice treće strane. Uključivanje bilo koje poveznice ne podrazumijeva našu preporuku ili odobrenje te web stranice.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Izmjene uvjeta korištenja</h2>
            <p className="text-gray-700 mb-4">
              Zadržavamo pravo izmjene ovih uvjeta korištenja u bilo kojem trenutku. Promjene stupaju na snagu objavljivanjem na ovoj web stranici. Vaša odgovornost je povremeno provjeriti ove uvjete kako biste bili informirani o eventualnim izmjenama.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Primjenjivo pravo</h2>
            <p className="text-gray-700 mb-4">
              Ovi uvjeti korištenja uređeni su i tumače se u skladu sa zakonima Republike Hrvatske. Svi sporovi koji proizlaze iz ili su povezani s korištenjem naše web stranice podliježu isključivoj nadležnosti sudova u Republici Hrvatskoj.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">Kontakt informacije</h2>
            <p className="text-gray-700">
              Ako imate pitanja o ovim uvjetima korištenja, molimo vas da nas kontaktirate na: <br />
              Telefon: <a href="tel:0994055109" className="text-primary hover:underline">099-4055-109</a> <br />
              Adresa: Melnica, Melnica 15 A, Hrvatska
            </p>
          </section>
        </div>
      </main>
    </>
  );
} 