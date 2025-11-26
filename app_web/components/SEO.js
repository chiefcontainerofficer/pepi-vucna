import Head from 'next/head';

const defaultTitle = 'PEPI Vučna Služba - Prijevoz vozila i pomoć na cesti 24/7';
const defaultDescription = 'Pouzdan prijevoz vozila, strojeva, kamp-kućica, motocikala i drugog tereta do 2500kg iz Istre prema svim gradovima u Hrvatskoj i povratno. Brza, sigurna i profesionalna usluga 24/7.';
const siteUrl = 'https://pepi.hr';
const siteName = 'PEPI Vučna Služba';
const defaultImage = `${siteUrl}/images/transport/Image2.webp`;

export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  url = siteUrl,
  type = 'website',
  noindex = false,
  structuredData = null,
  fbAppId = null,
}) {
  const fullTitle = title === defaultTitle ? title : `${title} | ${siteName}`;
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  // Get fb:app_id from prop or environment variable (supports both NEXT_PUBLIC_* and server-side env vars)
  const facebookAppId = fbAppId || process.env.NEXT_PUBLIC_FB_APP_ID || process.env.FB_APP_ID;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="hr_HR" />
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content="PEPI, obrt za vuču vozila, vl. Stjepan Percač" />
      <meta name="keywords" content="vučna služba, prijevoz vozila, pomoć na cesti, transport vozila Istra, vuča vozila, prijevoz strojeva, prijevoz kamp-kućica, pomoć na cesti 24/7, Istra Hrvatska" />
      <meta name="geo.region" content="HR-18" />
      <meta name="geo.placename" content="Melnica, Istra" />
      <meta name="geo.position" content="45.0695911;14.0011693" />
      <meta name="ICBM" content="45.0695911, 14.0011693" />

      {/* Structured Data */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((data, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
          ))
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )
      )}
    </Head>
  );
}

