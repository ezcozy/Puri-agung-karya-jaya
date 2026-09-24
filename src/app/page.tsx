export default function Home() {
  const waNumber = "6281178279880"; // +62 811-7827-988
  const waMessage = encodeURIComponent(
    "Halo, saya tertarik dengan Perumahan Puri Agung Karya Jaya Tipe 36 KPR Subsidi. Mohon info lebih lanjut."
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Puri Agung Karya Jaya" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-bold text-sm sm:text-base text-emerald-900 leading-tight">
              PURI AGUNG<br className="sm:hidden" /> <span className="hidden sm:inline">KARYA JAYA</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#tentang" className="hover:text-emerald-800">Tentang</a>
            <a href="#tipe-rumah" className="hover:text-emerald-800">Tipe Rumah</a>
            <a href="#keunggulan" className="hover:text-emerald-800">Keunggulan</a>
            <a href="#kontak" className="hover:text-emerald-800">Kontak</a>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full transition"
          >
            Hubungi Kami
          </a>
        </div>
      </nav>

      {/* HERO SECTION - VIDEO */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block bg-amber-500 text-white text-xs sm:text-sm font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
            Perumahan KPR Subsidi
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Hunian Elegan,<br />Investasi Masa Depan
          </h1>
          <p className="text-white/90 text-sm sm:text-lg max-w-xl mb-8">
            Rumah Tipe 36 dengan desain modern minimalis, lingkungan asri, dan
            kualitas hidup terbaik untuk keluarga Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-8 sm:px-0">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition text-center"
            >
              Hubungi Kami
            </a>
            <a
              href="#tipe-rumah"
              className="bg-white/10 backdrop-blur border border-white/40 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-full transition text-center"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </section>

      {/* TENTANG SECTION */}
      <section id="tentang" className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              Tentang Kami
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-emerald-900 mt-2">
              Perumahan Puri Agung Karya Jaya
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <img
              src="/gerbang.jpg"
              alt="Gerbang Perumahan Puri Agung Karya Jaya"
              className="rounded-2xl shadow-lg w-full h-64 sm:h-96 object-cover"
            />
            <div className="text-gray-700 space-y-4">
              <p>
                Puri Agung Karya Jaya adalah kawasan hunian eksklusif yang
                dirancang untuk keluarga Indonesia yang menginginkan tempat
                tinggal nyaman dengan akses KPR Subsidi. Lokasi strategis,
                lingkungan aman, dan fasilitas lengkap menjadikan perumahan
                ini pilihan tepat untuk investasi masa depan.
              </p>
              <p>
                Dibangun dengan standar kualitas terbaik, setiap unit rumah
                menghadirkan desain modern minimalis yang fungsional dan
                estetik, cocok untuk keluarga muda yang baru memulai
                perjalanan memiliki rumah sendiri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPE RUMAH SECTION */}
      <section id="tipe-rumah" className="py-16 sm:py-24 px-4 bg-emerald-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              Pilihan Hunian
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-emerald-900 mt-2">
              Tipe Rumah
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid sm:grid-cols-2">
            <img
              src="/rumah-contoh.jpg"
              alt="Contoh Rumah Tipe 36"
              className="w-full h-64 sm:h-full object-cover"
            />
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">
                KPR SUBSIDI
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-2">
                Tipe 36
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Luas Tanah 7.50m x 12.00m — Desain modern minimalis dengan
                tata ruang efisien.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span> 1 Ruang Tamu &amp; 1 Ruang Keluarga
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span> Kamar Tidur &amp; Dapur
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span> Carport &amp; Taman
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span> Halaman Belakang
                </li>
              </ul>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-6 py-3 rounded-full transition text-center w-fit"
              >
                Tanya Harga &amp; Simulasi KPR
              </a>
            </div>
          </div>

          {/* Denah */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h4 className="font-bold text-emerald-900 mb-4 text-center">
              Denah Rumah Tipe 36
            </h4>
            <img
              src="/denah-type36.jpg"
              alt="Denah Rumah Tipe 36"
              className="rounded-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* KEUNGGULAN SECTION */}
      <section id="keunggulan" className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              Kenapa Memilih Kami
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-emerald-900 mt-2">
              Keunggulan
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🏡",
                title: "KPR Subsidi",
                desc: "Kemudahan cicilan ringan dengan program KPR bersubsidi pemerintah.",
              },
              {
                icon: "🛡️",
                title: "Lingkungan Aman",
                desc: "Kawasan berpagar dengan akses gerbang terkontrol dan keamanan 24 jam.",
              },
              {
                icon: "🎨",
                title: "Desain Modern",
                desc: "Hunian bergaya minimalis modern yang fungsional dan estetik.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-emerald-50 rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-emerald-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK SECTION */}
      <section id="kontak" className="py-16 sm:py-24 px-4 bg-emerald-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Wujudkan Rumah Impian Anda
          </h2>
          <p className="text-emerald-100 mb-8">
            Hubungi tim kami sekarang untuk informasi lebih lanjut mengenai
            Perumahan Puri Agung Karya Jaya, simulasi KPR, dan jadwal survey
            lokasi.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-full transition"
          >
            <span>💬</span> Chat via WhatsApp
          </a>
          <p className="mt-6 text-emerald-200 text-sm">+62 811-7827-988</p>
          <p className="mt-2 text-emerald-200 text-sm max-w-md mx-auto">
            Jl. KH. M. Sahid, Kel. Kramasan, Kec. Kertapati, Palembang
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-950 text-emerald-200 text-center py-6 px-4 text-xs sm:text-sm">
        <p>&copy; {new Date().getFullYear()} Puri Agung Karya Jaya. All rights reserved.</p>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl transition"
        aria-label="Chat WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
          <path d="M16.001 3C9.372 3 4 8.373 4 15c0 2.42.71 4.68 1.94 6.57L4 29l7.62-1.9A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.63 28 15S22.63 3 16.001 3zm0 21.75c-1.96 0-3.79-.55-5.35-1.5l-.38-.23-4.52 1.13 1.16-4.4-.25-.39A9.7 9.7 0 0 1 5.75 15c0-5.66 4.6-10.25 10.25-10.25S26.25 9.34 26.25 15 21.66 24.75 16.001 24.75zm5.6-7.67c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.69.15-.2.31-.79 1-.97 1.2-.18.21-.36.23-.67.08-.31-.15-1.3-.48-2.47-1.53-.91-.81-1.53-1.81-1.71-2.12-.18-.31-.02-.47.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.21.05-.39-.03-.54-.08-.15-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53-.18-.01-.39-.01-.6-.01-.21 0-.54.08-.83.39-.28.31-1.09 1.06-1.09 2.6s1.11 3 1.27 3.21c.15.21 2.19 3.35 5.32 4.7.74.32 1.32.51 1.77.65.74.24 1.42.2 1.95.12.6-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.21-.59-.36z"/>
        </svg>
      </a>
    </main>
  );
}
