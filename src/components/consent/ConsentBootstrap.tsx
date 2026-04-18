const BOOTSTRAP_SCRIPT = `
(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    personalization_storage: 'denied',
    wait_for_update: 500
  });
  window.gtag = gtag;
})();
`.trim();

export default function ConsentBootstrap() {
  return (
    <script
      id="consent-bootstrap"
      dangerouslySetInnerHTML={{ __html: BOOTSTRAP_SCRIPT }}
    />
  );
}
