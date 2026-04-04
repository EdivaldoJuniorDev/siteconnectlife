"use client";

const WA_LINK =
  "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20vi%20o%20site%20de%20demonstra%C3%A7%C3%A3o%20e%20quero%20um%20site%20assim%20para%20minha%20cl%C3%ADnica";

export default function BannerDemo() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-10 bg-[#0F0F0E] flex items-center justify-center px-4">
      <span className="text-[11px] text-white/70">
        ⚡ Este site foi criado em 7 dias —{" "}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C8501A] hover:text-[#DA6230] underline underline-offset-2 transition-colors"
        >
          Quero o meu assim →
        </a>
      </span>
    </div>
  );
}
