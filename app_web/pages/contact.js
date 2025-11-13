import { useState } from 'react';
import SEO from '../components/SEO';

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "PEPI Vučna Služba",
      "telephone": "+385994055109",
      "email": "info@pepi.hr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Melnica 15 A",
        "addressLocality": "Melnica",
        "addressRegion": "Istra",
        "addressCountry": "HR"
      }
    }
  };

  return (
    <>
      <SEO
        title="Kontakt"
        description="Kontaktirajte nas za transport vozila, strojeva i tereta iz Istre prema cijeloj Hrvatskoj. Dostupni 24/7 za pomoć na cesti. Nazovite +385 99 4055 109 ili pošaljite upit."
        url="/contact"
        structuredData={structuredData}
      />
      <main className="min-h-screen bg-black">
        <section className="py-8 sm:py-12 bg-black">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Kontaktirajte nas</h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg" style={{ border: '2px solid #FBBF24' }}>
                {submitted ? (
                  <div className="text-center">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Poruka je poslana!</h3>
                    <p className="text-sm sm:text-base text-white/70 mb-4">Hvala na vašem upitu. Naš stručni tim javit će vam se u najkraćem mogućem roku.</p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="text-primary underline hover:text-primary-dark font-bold text-sm sm:text-base"
                    >
                      Pošalji još jednu poruku
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-black text-white p-4 rounded-lg border-2 border-primary text-center">
                        {error}
                      </div>
                    )}
                    <div>
                      <label htmlFor="name" className="block text-sm sm:text-base font-medium text-white mb-2">
                        Ime i prezime
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-primary bg-gray-800 text-white text-sm sm:text-base transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white mb-2">
                        Vaš email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-primary bg-gray-800 text-white text-sm sm:text-base transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm sm:text-base font-medium text-white mb-2">
                        Poruka
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-primary bg-gray-800 text-white text-sm sm:text-base transition-colors resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-black font-bold px-6 py-3 rounded-lg hover:bg-primary-dark transition text-base sm:text-lg shadow-lg transform hover:scale-[1.02] active:scale-95"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Slanje...
                        </span>
                      ) : (
                        'Pošalji poruku'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <p className="text-lg sm:text-xl text-white/80 mb-6">Ili nas kontaktirajte izravno:</p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-4">
                <p className="text-2xl sm:text-3xl text-white font-bold mb-2">
                  <a href="tel:+385994055109" className="hover:text-primary transition-colors">+385 99 4055 109</a>
                </p>
                <p className="text-base sm:text-lg text-white/70 mb-2">
                  Poruka / WhatsApp / Viber
                </p>
                <p className="text-sm sm:text-base text-white/70">
                  Dostupni 24/7 za transport i pomoć na cesti
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 