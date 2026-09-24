import { ArrowDown, ArrowUpRight, Check, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { HeroReveal, Reveal } from "@/components/reveal";

const BASE = "/Puri-agung-karya-jaya";
const number = "6281178279880";
const message = encodeURIComponent("Halo, saya tertarik dengan Puri Agung Karya Jaya tipe 36 KPR subsidi. Mohon info lebih lanjut.");
const whatsapp = `https://wa.me/${number}?text=${message}`;

export default function Home() {
  return <main>
    <header className="topbar">
      <a className="brand" href="#awal"><img src={`${BASE}/logo.jpg`} alt=""/><span>Puri Agung<br/>Karya Jaya</span></a>
      <nav><a href="#residensi">Residensi</a><a href="#hunian">Tipe 36</a><a href="#lokasi">Lokasi</a></nav>
      <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Hubungi Kami <ArrowUpRight/></a>
    </header>

    <section id="awal" className="hero">
      <video autoPlay muted loop playsInline poster={`${BASE}/gerbang.jpg`}><source src={`${BASE}/hero-video.mp4`} type="video/mp4"/></video>
      <div className="hero-shade"/>
      <HeroReveal className="hero-copy">
        <p className="eyebrow light">Hunian KPR Subsidi Â· Palembang</p>
        <h1>Awal yang indah<br/><em>untuk keluarga.</em></h1>
        <p className="hero-lead">Puri Agung Karya Jaya menghadirkan rumah pertama yang nyaman, terjangkau, dan layak dibanggakan.</p>
        <a className="button gold" href={whatsapp} target="_blank" rel="noreferrer"><WhatsappLogo weight="fill"/> Jadwalkan Survey</a>
      </HeroReveal>
      <a className="scroll" href="#residensi"><span>Jelajahi</span><ArrowDown/></a>
      <div className="hero-fact"><span>01</span><p>Kawasan hunian<br/>di Kertapati</p></div>
    </section>

    <section id="residensi" className="intro section-pad">
      <Reveal className="intro-title"><p className="eyebrow">Puri Agung Karya Jaya</p><h2>Rumah sederhana,<br/><em>dirancang bermakna.</em></h2></Reveal>
      <Reveal delay={.12} className="intro-text"><p>Hunian tipe 36 untuk keluarga muda yang ingin memiliki rumah pertama dengan proses jelas dan cicilan yang masuk akal.</p><div className="rule"/><p className="small">Akses jalan rapi, lingkungan terus berkembang, dan tata ruang efisien untuk kehidupan sehari-hari.</p></Reveal>
    </section>

    <section className="gateway section-pad">
      <Reveal className="gateway-image"><img src={`${BASE}/gerbang.jpg`} alt="Gerbang Puri Agung Karya Jaya"/><span className="image-index">01 / Gerbang Utama</span></Reveal>
      <Reveal delay={.12} className="gateway-copy"><p className="eyebrow">Sebuah lingkungan untuk bertumbuh</p><h2>Tenang saat pulang.<br/>Nyaman untuk tinggal.</h2><p>Kawasan berpagar dengan akses gerbang tunggal yang terkontrol, menghadirkan rasa aman bagi seluruh keluarga.</p><ul><li><Check/> Lingkungan asri</li><li><Check/> Akses jalan tertata</li><li><Check/> Kawasan berkembang</li></ul></Reveal>
    </section>

    <section id="hunian" className="residence section-pad">
      <div className="residence-head"><Reveal><p className="eyebrow light">Hunian Pilihan</p><h2>Tipe 36</h2></Reveal><Reveal delay={.1}><p>Proporsi ruang yang efisien,<br/>untuk hidup yang terasa lapang.</p></Reveal></div>
      <div className="residence-grid">
        <Reveal className="house-image"><img src={`${BASE}/rumah-contoh.jpg`} alt="Rumah contoh tipe 36"/></Reveal>
        <Reveal delay={.12} className="spec-card"><span className="spec-no">36</span><p className="eyebrow">Luas Bangunan</p><h3>Tanah 7.5 Ã— 12 meter</h3><p>Ruang tamu, ruang keluarga, kamar tidur, dapur, carport, serta taman dalam satu unit siap huni.</p><div className="spec-list"><span>Ruang keluarga</span><span>Kamar tidur</span><span>Dapur</span><span>Carport & taman</span></div><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Tanya harga & simulasi KPR <ArrowUpRight/></a></Reveal>
      </div>
    </section>

    <section className="plan section-pad">
      <Reveal className="plan-copy"><p className="eyebrow">Tata Ruang</p><h2>Setiap meter<br/><em>punya fungsi.</em></h2><p>Denah yang ringkas memberi ruang untuk aktivitas keluarga tanpa menyisakan area yang sia-sia.</p></Reveal>
      <Reveal delay={.12} className="plan-image"><img src={`${BASE}/denah-type36.jpg`} alt="Denah rumah tipe 36"/></Reveal>
    </section>

    <section id="lokasi" className="location">
      <div className="location-photo"><img src={`${BASE}/gerbang.jpg`} alt="Kawasan Puri Agung Karya Jaya"/></div>
      <Reveal className="location-card"><p className="eyebrow light">Lokasi</p><h2>Kertapati,<br/>Palembang</h2><p><MapPin/> Jl. KH. M. Sahid, Kel. Kramasan,<br/>Kec. Kertapati, Palembang</p><a className="button outline" href={whatsapp} target="_blank" rel="noreferrer">Minta Petunjuk Lokasi <ArrowUpRight/></a></Reveal>
    </section>

    <section className="closing section-pad"><Reveal><p className="eyebrow">Langkah pertama dimulai di sini</p><h2>Mari lihat langsung<br/><em>rumah masa depan Anda.</em></h2><a className="button dark" href={whatsapp} target="_blank" rel="noreferrer"><WhatsappLogo weight="fill"/> Chat via WhatsApp</a></Reveal></section>
    <footer><div className="brand footer-brand"><img src={`${BASE}/logo.jpg`} alt=""/><span>Puri Agung<br/>Karya Jaya</span></div><p>KPR Subsidi Â· Tipe 36<br/>Kertapati, Palembang</p><p>+62 811-7827-988<br/>Â© {new Date().getFullYear()}</p></footer>
    <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat via WhatsApp"><WhatsappLogo weight="fill"/><span>WhatsApp</span></a>
  </main>;
}

