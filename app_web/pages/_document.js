import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    // Get GA Measurement ID from environment variable (available at runtime in Docker)
    // Using GA_MEASUREMENT_ID instead of NEXT_PUBLIC_* so it works with Docker Swarm
    const gaMeasurementId = process.env.GA_MEASUREMENT_ID || '';
    
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
          {/* Inject GA Measurement ID for runtime access */}
          {gaMeasurementId && (
            <script
              dangerouslySetInnerHTML={{
                __html: `window.__GA_MEASUREMENT_ID__ = '${gaMeasurementId}';`,
              }}
            />
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