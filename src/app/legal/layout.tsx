import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <article
          className="
            [&_h1]:text-4xl [&_h1]:font-display [&_h1]:text-text-primary [&_h1]:mb-8
            [&_h2]:text-2xl [&_h2]:font-display [&_h2]:text-text-primary [&_h2]:mt-12 [&_h2]:mb-4
            [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:text-text-secondary [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:pl-6 [&_ul]:list-disc
            [&_li]:leading-relaxed
            [&_a]:text-text-primary [&_a]:underline [&_a]:underline-offset-2
            [&_strong]:text-text-primary [&_strong]:font-medium
          "
        >
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
