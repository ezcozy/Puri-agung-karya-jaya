import { House, ShieldCheck, PaintBrushHousehold, WhatsappLogo, MapPin } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Puri Agung Karya Jaya | Hunian KPR Subsidi Palembang",
  description:
    "Puri Agung Karya Jaya - hunian tipe 36 KPR subsidi di Kertapati, Palembang. Lingkungan asri, akses mudah, desain modern.",
};

const BASE_PATH = "/Puri-agung-karya-jaya";

export default function Home() {
  const waNumber = "6281178279880";
  const waMessage = encodeURIComponent(
    "Halo, saya tertarik dengan Puri Agung Karya Jaya tipe 36 KPR subsidi. Mohon info lebih lanjut."
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#1F3A2E]">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F7F2]/95 backdrop-blur-sm border-b border-[#1F3A2E]/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={`${BASE_PATH}/logo.jpg`}
              alt="Puri Agung Karya Jaya"
              className="h-9 w-9 rounded-full object-cover ring-1 ring-[#B8862E]/40"
            />
            <span className="font-serif text-[15px] sm:text-base font-semibold tracking-tight">
              Puri Agung Karya Jaya
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#1F3A2E]/75">
            <a href="#tentang" className="hover:text-[#1F3A2E] transition-colors">Tentang</a>
            <a href="#tipe-rumah" className="hover:text-[#1F3A2E] transition-colors">Tipe Rumah</a>
            <a href="#keunggulan" className="hover:text-[#1F3A2E] transition-colors">Keunggulan</a>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-medium border border-[#1F3A2E] px-4 py-2 rounded-none hover:bg-[#1F3A2E] hover:text-[#F8F7F2] transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </nav>

      {/* HERO - asymmetric split, video right, text left */}
      <section className="pt-16 min-h-[100dvh] grid md:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-14 py-12 md:py-0 order-2 md:order-1">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8862E] font-medium mb-5">
            Tipe 36, KPR Subsidi
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">
            Rumah pertama,
            <br />
            tanpa beban berat.
          </h1>
          <p className="text-[#1F3A2E]/70 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
            Hunian tipe 36 dengan cicilan ringan lewat program KPR subsidi, di
            lingkungan asri Kertapati, Palembang.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1F3A2E] text-[#F8F7F2] px-7 py-3.5 text-sm font-medium hover:bg-[#16291F] transition-colors"
            >
              <WhatsappLogo size={18} weight="fill" />
              Hubungi Kami
            </a>
            <a
              href="#tipe-rumah"
              className="text-sm font-medium underline decoration-[#B8862E] decoration-2 underline-offset-4 hover:text-[#B8862E] transition-colors"
            >
              Lihat Tipe Rumah
            </a>
          </div>
        </div>

        <div className="relative h-[45vh] md:h-auto order-1 md:order-2 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={`${BASE_PATH}/hero-video.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A2E]/20 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-[#F8F7F2]/10" />
        </div>
      </section>

      {/* TENTANG - stacked, no split-header */}
      <section id="tentang" className="py-20 sm:py-28 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-5">
            Kawasan hunian di jantung Kertapati
          </h2>
          <p className="text-[#1F3A2E]/70 leading-relaxed max-w-2xl mx-auto">
            Puri Agung Karya Jaya dibangun untuk keluarga muda yang ingin
            memiliki rumah pertama dengan proses yang jelas dan cicilan yang
            masuk akal. Setiap unit dirancang fungsional, dengan akses jalan
            yang sudah rapi dan lingkungan yang terus berkembang.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <img
            src={`${BASE_PATH}/gerbang.jpg`}
            alt="Gerbang Puri Agung Karya Jaya"
            className="w-full h-[300px] sm:h-[420px] object-cover"
          />
        </div>
      </section>

      {/* TIPE RUMAH - full width feature, different layout family */}
      <section id="tipe-rumah" className="py-20 sm:py-28 px-6 sm:px-10 bg-[#1F3A2E] text-[#F8F7F2]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16">
            <img
              src={`${BASE_PATH}/rumah-contoh.jpg`}
              alt="Contoh rumah tipe 36"
              className="w-full h-[280px] sm:h-[380px] object-cover"
            />
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D9A94A] font-medium">
                Tipe 36
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl mt-3 mb-4">
                Tanah 7.5 x 12 meter
              </h3>
              <p className="text-[#F8F7F2]/70 leading-relaxed mb-7 max-w-sm">
                Ruang tamu, ruang keluarga, kamar tidur, dapur, carport, dan
                taman dalam satu unit yang efisien dan siap huni.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D9A94A] text-[#1F3A2E] px-7 py-3.5 text-sm font-semibold hover:bg-[#c99a3d] transition-colors"
              >
                <WhatsappLogo size={18} weight="fill" />
                Tanya Harga
              </a>
            </div>
          </div>

          <div className="bg-[#F8F7F2] p-6 sm:p-10">
            <p className="text-[#1F3A2E]/60 text-xs uppercase tracking-[0.15em] mb-5 text-center">
              Denah Rumah
            </p>
            <img
              src={`${BASE_PATH}/denah-type36.jpg`}
              alt="Denah rumah tipe 36"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </section>

      {/* KEUNGGULAN - grouped, real icons, not identical cards */}
      <section id="keunggulan" className="py-20 sm:py-28 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-center mb-16">
            Kenapa Puri Agung Karya Jaya
          </h2>
          <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
            <div className="text-center sm:text-left">
              <House size={28} weight="light" className="mx-auto sm:mx-0 mb-4 text-[#B8862E]" />
              <h3 className="font-serif text-lg mb-2">KPR Subsidi</h3>
              <p className="text-sm text-[#1F3A2E]/65 leading-relaxed">
                Cicilan ringan lewat program subsidi pemerintah, proses
                pengajuan dibantu sampai selesai.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <ShieldCheck size={28} weight="light" className="mx-auto sm:mx-0 mb-4 text-[#B8862E]" />
              <h3 className="font-serif text-lg mb-2">Lingkungan Aman</h3>
              <p className="text-sm text-[#1F3A2E]/65 leading-relaxed">
                Kawasan berpagar dengan akses gerbang tunggal yang terkontrol.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <PaintBrushHousehold size={28} weight="light" className="mx-auto sm:mx-0 mb-4 text-[#B8862E]" />
              <h3 className="font-serif text-lg mb-2">Desain Modern</h3>
              <p className="text-sm text-[#1F3A2E]/65 leading-relaxed">
                Fasad minimalis dengan tata ruang yang efisien untuk keluarga
                muda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="py-20 sm:py-28 px-6 sm:px-10 bg-[#1F3A2E] text-[#F8F7F2]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-5">
            Jadwalkan survey lokasi
          </h2>
          <p className="text-[#F8F7F2]/70 mb-9 leading-relaxed">
            Tim kami siap membantu simulasi KPR dan menjawab pertanyaan Anda
            seputar Puri Agung Karya Jaya.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D9A94A] text-[#1F3A2E] px-8 py-4 text-sm font-semibold hover:bg-[#c99a3d] transition-colors"
          >
            <WhatsappLogo size={18} weight="fill" />
            Chat via WhatsApp
          </a>
          <div className="mt-10 flex flex-col items-center gap-2 text-sm text-[#F8F7F2]/60">
            <span>+62 811-7827-988</span>
            <span className="inline-flex items-center gap-1.5 max-w-xs text-center">
              <MapPin size={14} />
              Jl. KH. M. Sahid, Kel. Kramasan, Kec. Kertapati, Palembang
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center text-xs text-[#1F3A2E]/50">
        Puri Agung Karya Jaya, {new Date().getFullYear()}.
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-[#1F3A2E] text-[#F8F7F2] w-13 h-13 flex items-center justify-center shadow-lg hover:bg-[#16291F] transition-colors rounded-full p-3.5"
        aria-label="Chat WhatsApp"
      >
        <WhatsappLogo size={24} weight="fill" />
      </a>
    </main>
  );
}
