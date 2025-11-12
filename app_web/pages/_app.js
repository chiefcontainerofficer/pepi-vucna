import '../styles/globals.css';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
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
          },
          "onRevokeChoice": function() {
            console.log('Cookie consent revoked');
            updateConsentState(false);
            // Scroll to cookie banner when it appears
            setTimeout(() => {
              const cookieBanner = document.querySelector('.cc-window');
              if (cookieBanner) {
                cookieBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }
            }, 100);
          },
          "onPopupOpen": function() {
            // Scroll to cookie banner when it opens
            setTimeout(() => {
              const cookieBanner = document.querySelector('.cc-window');
              if (cookieBanner) {
                cookieBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }
            }, 100);
          }
        });
        
        // Add observer to watch for cookie banner appearance (only when it becomes visible)
        let hasScrolledToBanner = false;
        const observer = new MutationObserver((mutations) => {
          const cookieBanner = document.querySelector('.cc-window');
          if (cookieBanner && cookieBanner.style.display !== 'none' && !hasScrolledToBanner) {
            const rect = cookieBanner.getBoundingClientRect();
            // Only scroll if banner is not fully visible in viewport
            if (rect.bottom > window.innerHeight || rect.top < 0) {
              hasScrolledToBanner = true;
              setTimeout(() => {
                cookieBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                // Reset flag after scrolling completes
                setTimeout(() => {
                  hasScrolledToBanner = false;
                }, 1000);
              }, 100);
            }
          }
        });
        
        // Start observing the body for cookie banner changes
        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['style', 'class']
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
      {/* Google Consent Mode v2 */}
      <Script id="google-consent-mode" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          console.log('Setting up Google Consent Mode');
          
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
          console.log('Default consent state set');
        `}
      </Script>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CEBD3H2NJT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CEBD3H2NJT', {
            page_path: window.location.pathname,
            debug_mode: true
          });
          console.log('Google Analytics initialized');
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp; 