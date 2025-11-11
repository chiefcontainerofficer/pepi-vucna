import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Politika privatnosti | PEPI Transport</title>
        <meta name="description" content="Politika privatnosti tvrtke PEPI Transport. Saznajte kako štitimo vaše osobne podatke." />
      </Head>
      <main className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Politika privatnosti</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Općenito</h2>
            <p className="text-gray-700 mb-4">
              PEPI, obrt za vuču vozila, vl. Stjepan Percač poštuje vašu privatnost i predana je zaštiti vaših osobnih podataka. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše osobne podatke kada koristite našu web stranicu.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Koje podatke prikupljamo</h2>
            <p className="text-gray-700 mb-4">
              Prikupljamo podatke koje nam dobrovoljno pružate putem naših obrazaca za kontakt, uključujući ime, e-mail adresu i telefonski broj. Također možemo prikupljati određene tehničke podatke, kao što su IP adresa, vrsta preglednika, vrijeme pristupa i stranice koje posjećujete na našoj web stranici.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Kako koristimo vaše podatke</h2>
            <p className="text-gray-700 mb-4">
              Vaše podatke koristimo za odgovaranje na vaše upite, pružanje traženih usluga i poboljšanje korisničkog iskustva na našoj web stranici. Nikada nećemo dijeliti vaše podatke s trećim stranama bez vašeg izričitog pristanka, osim ako to zakon ne zahtijeva.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Zaštita podataka</h2>
            <p className="text-gray-700 mb-4">
              Implementirali smo odgovarajuće tehničke i organizacijske mjere kako bismo zaštitili vaše osobne podatke od neovlaštenog pristupa, gubitka ili krađe.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Vaša prava</h2>
            <p className="text-gray-700 mb-4">
              Prema Općoj uredbi o zaštiti podataka (GDPR), imate pravo pristupa, ispravka, brisanja i ograničavanja obrade vaših osobnih podataka. Imate i pravo uložiti prigovor na obradu vaših podataka i pravo na prenosivost podataka.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-2">Kontakt informacije</h2>
            <p className="text-gray-700 mb-4">
              Ako imate pitanja ili zahtjeve vezane uz vašu privatnost i osobne podatke, možete nas kontaktirati na: <br />
              Telefon: <a href="tel:0994055109" className="text-primary hover:underline">099-4055-109</a> <br />
              Adresa: Melnica, Melnica 15 A, Hrvatska
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">Izmjene politike privatnosti</h2>
            <p className="text-gray-700">
              Ova politika privatnosti može se povremeno mijenjati. Sve izmjene bit će objavljene na ovoj stranici. Posljednja izmjena: {new Date().toLocaleDateString('hr-HR')}.
            </p>
          </section>
        </div>
      </main>
    </>
  );
} 