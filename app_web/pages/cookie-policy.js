import SEO from '../components/SEO';

export default function CookiePolicy() {
  return (
    <>
      <SEO
        title="Politika kolačića"
        description="Politika kolačića tvrtke PEPI Vučna Služba. Saznajte kako koristimo kolačiće na našoj web stranici i kako možete upravljati svojim postavkama."
        url="/cookie-policy"
        noindex={true}
      />
      <main className="min-h-screen bg-black px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Politika kolačića</h1>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Što su kolačići</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju (računalo, tablet, telefon) kada posjetite našu web stranicu. Oni pomažu u praćenju vašeg posjeta i aktivnosti na našoj stranici te omogućuju bolje korisničko iskustvo.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Kako koristimo kolačiće</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Koristimo kolačiće za:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
              <li>Osiguravanje pravilnog funkcioniranja web stranice</li>
              <li>Pamćenje vaših preferencija</li>
              <li>Analizu prometa na stranici</li>
              <li>Poboljšanje korisničkog iskustva</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Vrste kolačića koje koristimo</h2>
            <div className="mb-4">
              <h3 className="font-semibold text-white mb-2">Nužni kolačići</h3>
              <p className="text-white/80 leading-relaxed">
                Ovi kolačići su neophodni za pravilno funkcioniranje naše web stranice i ne mogu se isključiti.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-white mb-2">Analitički kolačići</h3>
              <p className="text-white/80 leading-relaxed">
                Pomažu nam razumjeti kako posjetitelji koriste našu stranicu. Koristimo Google Analytics za praćenje prometa.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Kolačići za preferencije</h3>
              <p className="text-white/80 leading-relaxed">
                Omogućuju stranici da zapamti informacije koje mijenjaju način na koji se stranica ponaša ili izgleda.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Upravljanje kolačićima</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Većina web preglednika automatski prihvaća kolačiće, ali možete promijeniti postavke vašeg preglednika kako biste odbili kolačiće ako to želite. Imajte na umu da blokiranjem određenih kolačića možete utjecati na vaše iskustvo na našoj web stranici.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Izmjene politike kolačića</h2>
            <p className="text-white/80 leading-relaxed">
              Ova politika kolačića može se povremeno mijenjati. Sve izmjene bit će objavljene na ovoj stranici. Posljednja izmjena: {new Date().toLocaleDateString('hr-HR')}
            </p>
          </section>
        </div>
      </main>
    </>
  );
} 