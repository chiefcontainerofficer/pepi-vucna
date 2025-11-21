import '../styles/globals.css';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  // Get GA ID from window (injected by _document.js at runtime)
  // This works with Docker Swarm where env vars are set at runtime
  // Use state to ensure we get the value after the script executes
  const [gaMeasurementId, setGaMeasurementId] = useState(
    typeof window !== 'undefined' ? window.__GA_MEASUREMENT_ID__ : null
  );

  useEffect(() => {
    // Check for GA ID in case it wasn't available on first render
    if (!gaMeasurementId && typeof window !== 'undefined') {
      setGaMeasurementId(window.__GA_MEASUREMENT_ID__ || null);
    }
  }, [gaMeasurementId]);

  useEffect(() => {
    // Helper functions for Google Consent Mode
    function updateConsentState(consent) {
      if (typeof window.gtag === 'undefined') {
        console.log('gtag not loaded yet');
        return;
      }

      console.log('Updating consent state:', consent);
      window.gtag('consent', 'update', {
        'ad_storage': consent ? 'granted' : 'denied',
        'analytics_storage': consent ? 'granted' : 'denied',
        'ad_user_data': consent ? 'granted' : 'denied',
        'ad_personalization': consent ? 'granted' : 'denied',
        'functionality_storage': consent ? 'granted' : 'denied',
        'personalization_storage': consent ? 'granted' : 'denied',
        'security_storage': 'granted' // Always granted as it's essential
      });
    }

    // Initialize cookie consent with retry
    const initCookieConsent = () => {
      if (typeof window.cookieconsent === 'undefined') {
        console.log('Cookie consent script not loaded yet, retrying...');
        setTimeout(initCookieConsent, 100);
        return;
      }

      try {
        // Remove any existing cookie consent banners
        const existingBanner = document.querySelector('.cc-window');
        if (existingBanner) {
          existingBanner.remove();
        }

        window.cookieconsent.initialise({
          "palette": {
            "popup": {
              "background": "#FBBF24",
              "text": "#000000"
            },
            "button": {
              "background": "#000000",
              "text": "#FBBF24"
            }
          },
          "type": "opt-out",
          "position": "bottom-left",
          "static": true,
          "showLink": true,
          "dismissOnScroll": false,
          "dismissOnWindowClick": false,
          "content": {
            "message": "Ova web stranica koristi kolačiće kako bi osigurala najbolje iskustvo korisnicima.",
            "dismiss": "Prihvaćam",
            "allow": "Prihvaćam sve",
            "deny": "Odbijam",
            "link": "Saznajte više",
            "href": "/cookie-policy",
            "policy": "Kolačići"
          },
          "cookie": {
            "name": "pepi_transport_cookie_consent",
            "domain": window.location.hostname,
            "path": "/",
            "expiryDays": 365
          },
          "onInitialise": function (status) {
            const didConsent = this.hasConsented();
            console.log('Cookie consent initialized with status:', didConsent);
            updateConsentState(didConsent);
          },
          "onStatusChange": function(status, chosenBefore) {
            const didConsent = this.hasConsented();
            console.log('Cookie consent status changed:', didConsent);
            updateConsentState(didConsent);
          }
        });
        
        console.log('Cookie consent initialized successfully');
      } catch (error) {
        console.error('Error initializing cookie consent:', error);
      }
    };

    // Start initialization after a small delay
    setTimeout(initCookieConsent, 500);
  }, []);

  return (
    <>
      {/* Google Consent Mode v2 - Must run before GA */}
      <Script id="google-consent-mode" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Set default consent state
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted'
          });
        `}
      </Script>

      {/* Google tag (gtag.js) - Matches Google's exact snippet */}
      {gaMeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');
            `}
          </Script>
        </>
      )}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp; 