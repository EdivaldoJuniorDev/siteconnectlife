import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const ID_PATTERN = /^GTM-[A-Z0-9]+$/;

export function isGtmIdValid(id: string | undefined): id is string {
  return typeof id === "string" && ID_PATTERN.test(id);
}

export default function GoogleTagManager() {
  if (!isGtmIdValid(GTM_ID)) return null;

  const loaderScript = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`.trim();

  return (
    <Script
      id="gtm-loader"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: loaderScript }}
    />
  );
}

export function GoogleTagManagerNoScript() {
  if (!isGtmIdValid(GTM_ID)) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="GTM no-script fallback"
      />
    </noscript>
  );
}
