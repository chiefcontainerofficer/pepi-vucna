import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Politika privatnosti | PEPI Vučna Služba</title>
        <meta name="description" content="Politika privatnosti tvrtke PEPI Vučna Služba. Saznajte kako štitimo vaše osobne podatke." />
      </Head>
      <main className="min-h-screen bg-black px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Politika privatnosti</h1>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Općenito</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              PEPI, obrt za vuču vozila, vl. Stjepan Percač poštuje vašu privatnost i predana je zaštiti vaših osobnih podataka. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše osobne podatke kada koristite našu web stranicu.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Koje podatke prikupljamo</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Prikupljamo podatke koje nam dobrovoljno pružate putem naših obrazaca za kontakt, uključujući ime, e-mail adresu i telefonski broj. Također možemo prikupljati određene tehničke podatke, kao što su IP adresa, vrsta preglednika, vrijeme pristupa i stranice koje posjećujete na našoj web stranici.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Kako koristimo vaše podatke</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Vaše podatke koristimo za odgovaranje na vaše upite, pružanje traženih usluga i poboljšanje korisničkog iskustva na našoj web stranici. Nikada nećemo dijeliti vaše podatke s trećim stranama bez vašeg izričitog pristanka, osim ako to zakon ne zahtijeva.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Zaštita podataka</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Implementirali smo odgovarajuće tehničke i organizacijske mjere kako bismo zaštitili vaše osobne podatke od neovlaštenog pristupa, gubitka ili krađe.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Vaša prava</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Prema Općoj uredbi o zaštiti podataka (GDPR), imate pravo pristupa, ispravka, brisanja i ograničavanja obrade vaših osobnih podataka. Imate i pravo uložiti prigovor na obradu vaših podataka i pravo na prenosivost podataka.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Kontakt informacije</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Ako imate pitanja ili zahtjeve vezane uz vašu privatnost i osobne podatke, možete nas kontaktirati na: <br />
              Telefon: <a href="tel:+385994055109" className="text-primary hover:underline font-semibold">+385 99 4055 109</a> <br />
              Adresa: Melnica, Melnica 15 A, Hrvatska
            </p>
          </section>
          
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Izmjene politike privatnosti</h2>
            <p className="text-white/80 leading-relaxed">
              Ova politika privatnosti može se povremeno mijenjati. Sve izmjene bit će objavljene na ovoj stranici. Posljednja izmjena: {new Date().toLocaleDateString('hr-HR')}.
            </p>
          </section>
        </div>
      </main>
    </>
  );
} 