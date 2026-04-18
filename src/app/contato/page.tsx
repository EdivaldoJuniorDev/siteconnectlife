import type { Metadata } from "next";
import { Mail, MessageCircle, Phone, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import { NAP } from "@/lib/contact/nap";

export const metadata: Metadata = {
  title: "Contato | ConnectLife Tecnologia — Manaus",
  description:
    "Fale com a ConnectLife. Software house em Manaus especializada em Sites, Micro-SaaS, SaaS e Automações. Atendimento por WhatsApp, e-mail ou formulário.",
  alternates: {
    canonical: "https://connectlife.com.br/contato",
  },
  openGraph: {
    title: "Contato | ConnectLife Tecnologia — Manaus",
    description:
      "Fale com a ConnectLife. Atendimento por WhatsApp, e-mail ou formulário.",
    url: "https://connectlife.com.br/contato",
    siteName: "ConnectLife",
    locale: "pt_BR",
    type: "website",
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contato — ConnectLife Tecnologia",
  url: `${NAP.url}/contato`,
  mainEntity: {
    "@type": "Organization",
    name: NAP.name,
    url: NAP.url,
    logo: `${NAP.url}/logo.webp`,
    email: NAP.email,
    telephone: NAP.phone.e164,
    address: {
      "@type": "PostalAddress",
      addressLocality: NAP.address.locality,
      addressRegion: NAP.address.region,
      addressCountry: NAP.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: NAP.phone.e164,
        email: NAP.email,
        availableLanguage: ["Portuguese"],
        areaServed: "BR",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
    ],
  },
};

const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=Manaus,+AM,+Brasil&z=11&output=embed";

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd),
        }}
      />
      <Navbar />

      <main className="pt-24">
        <section className="bg-surface-light py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Vamos conversar
            </p>
            <h1 className="mt-4 font-playfair text-5xl leading-[1.05] text-text-primary md:text-6xl">
              Conte sua ideia.
              <br />
              Respondemos em até 24h úteis.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-text-secondary md:text-lg">
              Software house em Manaus. Atendemos projetos de Sites, Micro-SaaS,
              SaaS e Automações para empresas de todo o Brasil — 100% remoto ou
              presencial na região.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="font-playfair text-3xl text-text-primary md:text-4xl">
                Formulário de contato
              </h2>
              <p className="mt-3 text-sm text-text-secondary">
                Preencha os campos abaixo — ao enviar, abrimos o WhatsApp com
                uma mensagem pronta para que você confirme o envio.
              </p>

              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-10">
              <div>
                <h2 className="font-playfair text-3xl text-text-primary md:text-4xl">
                  Canais diretos
                </h2>
                <p className="mt-3 text-sm text-text-secondary">
                  Prefere conversar agora? Use um dos canais abaixo.
                </p>
              </div>

              <ul className="space-y-5">
                <li>
                  <a
                    href={NAP.phone.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 border border-black/10 p-5 transition-colors hover:border-accent"
                  >
                    <MessageCircle
                      className="mt-0.5 h-5 w-5 text-accent"
                      aria-hidden
                    />
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-secondary">
                        WhatsApp
                      </p>
                      <p className="mt-1 text-sm text-text-primary group-hover:text-accent">
                        {NAP.phone.display}
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${NAP.email}`}
                    className="group flex items-start gap-4 border border-black/10 p-5 transition-colors hover:border-accent"
                  >
                    <Mail
                      className="mt-0.5 h-5 w-5 text-accent"
                      aria-hidden
                    />
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-secondary">
                        E-mail
                      </p>
                      <p className="mt-1 text-sm text-text-primary group-hover:text-accent">
                        {NAP.email}
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={NAP.phone.telLink}
                    className="group flex items-start gap-4 border border-black/10 p-5 transition-colors hover:border-accent"
                  >
                    <Phone
                      className="mt-0.5 h-5 w-5 text-accent"
                      aria-hidden
                    />
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-secondary">
                        Telefone
                      </p>
                      <p className="mt-1 text-sm text-text-primary group-hover:text-accent">
                        {NAP.phone.display}
                      </p>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="border-t border-black/10 pt-6">
                <div className="flex items-start gap-3 text-sm text-text-secondary">
                  <Clock className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em]">
                      Horário de atendimento
                    </p>
                    <p className="mt-1 text-text-primary">
                      {NAP.hours.display}
                    </p>
                  </div>
                </div>
              </div>

              <address className="flex items-start gap-3 text-sm not-italic text-text-secondary">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em]">
                    Localização
                  </p>
                  <p className="mt-1 text-text-primary">
                    {NAP.address.locality}, {NAP.address.region} —{" "}
                    {NAP.address.countryName}
                  </p>
                </div>
              </address>
            </aside>
          </div>
        </section>

        <section className="bg-surface-warm py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-text-secondary">
              Onde estamos
            </p>
            <h2 className="mt-3 font-playfair text-3xl text-text-primary md:text-4xl">
              Manaus — Amazonas
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-text-secondary">
              Trabalhamos 100% digital, mas reuniões presenciais em Manaus são
              bem-vindas mediante agendamento.
            </p>

            <div className="mt-10 overflow-hidden border border-black/10 bg-white">
              <iframe
                title="Mapa — Manaus, Amazonas, Brasil"
                src={MAPS_EMBED_SRC}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
