import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // Get GA Measurement ID from environment variable (available at runtime in Docker)
    // Fallback to hardcoded value if env var is not set
    const gaMeasurementId = process.env.GA_MEASUREMENT_ID || 'G-GS92FW34P3';
    return {
      ...initialProps,
      gaMeasurementId,
    };
  }

  render() {
    // Get GA Measurement ID from getInitialProps (available at runtime in Docker)
    // Using GA_MEASUREMENT_ID instead of NEXT_PUBLIC_* so it works with Docker Swarm
    const { gaMeasurementId } = this.props;
    
    return (
      <Html lang="hr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/images/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.1/cookieconsent.min.css" />
          <script 
            src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.1/cookieconsent.min.js"
            defer
          />
          {/* Google Consent Mode v2 - Must run before GA */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
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
              `,
            }}
          />
          {/* Google tag (gtag.js) - Exact Google snippet */}
          {gaMeasurementId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaMeasurementId}');
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument; 