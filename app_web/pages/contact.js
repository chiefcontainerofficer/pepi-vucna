import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Send form data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Došlo je do greške pri slanju poruke.');
      }
      
      // Mark as submitted on success
      setSubmitted(true);
      
      // Clear form
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending email:', err);
      setError(err.message || 'Došlo je do greške pri slanju poruke. Pokušajte ponovno ili nas izravno kontaktirajte.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Kontakt | PEPI Transport</title>
        <meta name="description" content="Kontaktirajte nas za transport vozila, strojeva i tereta iz Istre prema cijeloj Hrvatskoj. Dostupni 24/7 za pomoć na cesti." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="min-h-screen bg-black px-4 py-8 sm:py-16 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Kontaktirajte nas</h1>
        <div className="w-full max-w-2xl bg-primary p-4 sm:p-8 rounded-lg shadow-lg border-2 border-black mb-6 sm:mb-8">
          {submitted ? (
            <div className="text-center">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">Poruka je poslana!</h3>
              <p className="text-sm sm:text-base text-black/90 mb-4">Hvala na vašem upitu. Naš stručni tim javit će vam se u najkraćem mogućem roku.</p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="text-black underline hover:text-black/80 font-bold text-sm sm:text-base"
              >
                Pošalji još jednu poruku
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-black text-white p-3 rounded border-2 border-primary text-center">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-black mb-1">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-black text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-black mb-1">
                  Vaš email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-black text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-black mb-1">
                  Poruka
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border-2 border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-black text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-black font-bold px-4 py-2 rounded-md hover:bg-primary-dark transition text-sm sm:text-base shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Slanje...
                  </>
                ) : (
                  'Pošalji poruku'
                )}
              </button>
            </form>
          )}
        </div>

        <div className="w-full max-w-2xl flex flex-col items-center">
          <p className="text-sm sm:text-base text-white mb-4 text-center">Ili nas kontaktirajte izravno:</p>
          <div className="bg-primary p-6 rounded-xl shadow-lg border-2 border-black w-full text-center">
            <p className="text-2xl sm:text-3xl text-black font-bold mb-2">
              <a href="tel:0994055109" className="hover:underline">099-4055-109</a>
            </p>
            <p className="text-sm sm:text-base text-black/90 mb-4">
              Poruka / WhatsApp / Viber
            </p>
            <p className="text-sm sm:text-base text-black/90">
              Dostupni 24/7 za transport i pomoć na cesti
            </p>
          </div>
        </div>
      </main>
    </>
  );
} 