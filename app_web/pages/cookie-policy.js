import Head from 'next/head';

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Politika kolačića | PEPI Transport</title>
        <meta name="description" content="Politika kolačića tvrtke PEPI Transport. Saznajte kako koristimo kolačiće na našoj web stranici." />
      </Head>
      <main className="min-h-screen bg-white px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Politika kolačića</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Što su kolačići</h2>
            <p className="text-gray-700 mb-4">
              Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju (računalo, tablet, telefon) kada posjetite našu web stranicu. Oni pomažu u praćenju vašeg posjeta i aktivnosti na našoj stranici te omogućuju bolje korisničko iskustvo.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Kako koristimo kolačiće</h2>
            <p className="text-gray-700 mb-4">
              Koristimo kolačiće za:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Osiguravanje pravilnog funkcioniranja web stranice</li>
              <li>Pamćenje vaših preferencija</li>
              <li>Analizu prometa na stranici</li>
              <li>Poboljšanje korisničkog iskustva</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Vrste kolačića koje koristimo</h2>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-1">Nužni kolačići</h3>
              <p className="text-gray-700">
                Ovi kolačići su neophodni za pravilno funkcioniranje naše web stranice i ne mogu se isključiti.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-1">Analitički kolačići</h3>
              <p className="text-gray-700">
                Pomažu nam razumjeti kako posjetitelji koriste našu stranicu. Koristimo Google Analytics za praćenje prometa.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Kolačići za preferencije</h3>
              <p className="text-gray-700">
                Omogućuju stranici da zapamti informacije koje mijenjaju način na koji se stranica ponaša ili izgleda.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Upravljanje kolačićima</h2>
            <p className="text-gray-700 mb-4">
              Većina web preglednika automatski prihvaća kolačiće, ali možete promijeniti postavke vašeg preglednika kako biste odbili kolačiće ako to želite. Imajte na umu da blokiranjem određenih kolačića možete utjecati na vaše iskustvo na našoj web stranici.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">Izmjene politike kolačića</h2>
            <p className="text-gray-700">
              Ova politika kolačića može se povremeno mijenjati. Sve izmjene bit će objavljene na ovoj stranici. Posljednja izmjena: {new Date().toLocaleDateString('hr-HR')}
            </p>
          </section>
        </div>
      </main>
    </>
  );
} 