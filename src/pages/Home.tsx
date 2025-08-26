"use client";
import Image from "next/image";
import { HeartPulse, Syringe, Stethoscope, Phone, MapPin, Clock, Home, ShoppingBag, ClipboardList, ScanLine, Activity, Flower2, Scissors } from "lucide-react";
import { TeamSection } from "@/components/TeamSection";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5519998404131&text=Ol%C3%A1!%20Vim%pelo%site%20da%20Moon%20Cat%20e%20gostaria%20de%20agendar%20uma%20consulta!";
const BRAND_NAME = "Moon Cat";
const ADDRESS = "R. Reg. Feijó, 220 - Cidade Nova I, Indaiatuba - SP, 13334-090"; 
const PHONE_DISPLAY = "(19) 99840-4131"; 
const INSTAGRAM_HANDLE = "mooncatmedicinafelina";
const DEVELOPED_BY = "https://github.com/brunobarretta"


export default function HomePage() {

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-primary">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/mooncat.png"
              alt="Logo da clínica Moon Cat"
              width={48}
              height={48}
              priority
            />
            <span className="font-gistesy text-3xl">{BRAND_NAME}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-emerald-500 text-white font-medium shadow hover:shadow-md transition"
            >
              <Phone className="w-4 h-4" /> Agendar no WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50">
        {/* Container */}
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Cuidado especializado <span className="text-primary">exclusivo</span> para o seu gato
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700">
              Ambiente tranquilo, equipe apaixonada por felinos e estrutura adaptada para o bem-estar do seu companheiro.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-primary text-white font-semibold shadow hover:shadow-md transition"
              >
                <Phone className="w-5 h-5" /> Agendar consulta
              </a>
              <a
                href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white shadow hover:opacity-90 transition bg-gradient-to-r from-[#d62976] via-[#962fbf] to-[#4f5bd5]"
              >
                Ver Instagram
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-center gap-6">
            <Image
              src="/images/mooncat.png"
              alt="Logo da clínica Moon Cat"
              width={320}
              height={320}
              className="animate-fade-in-up"
              priority
            />

            <div className="flex items-center justify-center flex-wrap gap-4">
              <Image
                src="/images/cat-friendly-practice-logo.png"
                alt="Selo Cat Friendly Practice"
                width={200}
                height={80}
                className="drop-shadow-md"
              />
              <Image
                src="/images/cat-friendly-veterinarian.png"
                alt="Selo Cat Friendly Veterinarian"
                width={200}
                height={60}
                className="drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20" id="servicos">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Nossos Serviços</h2>
          <p className="text-center text-gray-600 mt-2">
            Tudo que o seu gato precisa, em um só lugar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <Card title="Cirurgias" icon={<Scissors className="w-6 h-6 text-primary" />}>
              Procedimentos com anestesia segura e monitoramento dedicado.
            </Card>

            <Card title="Vacinação" icon={<Syringe className="w-6 h-6 text-primary" />}>
              Protocolos atualizados para manter a saúde do seu gato em dia.
            </Card>

            <Card title="Especialidades" icon={<Stethoscope className="w-6 h-6 text-primary" />}>
              Atendimento em diversas áreas da medicina felina.
            </Card>

            <Card title="Exames" icon={<HeartPulse className="w-6 h-6 text-primary" />}>
              Laboratoriais e de imagem com manejo reduzindo o estresse.
            </Card>

            <Card title="Day Care" icon={<Home className="w-6 h-6 text-primary" />}>
              Espaço seguro e tranquilo para seu gato passar o dia.
            </Card>

            <Card title="Cat Shop" icon={<ShoppingBag className="w-6 h-6 text-primary" />}>
              Produtos selecionados e de qualidade para o bem-estar felino.
            </Card>

            <Card title="Procedimentos" icon={<ClipboardList className="w-6 h-6 text-primary" />}>
              Cuidados diversos para manter a saúde do seu gato em dia.
            </Card>

            <Card title="Raio-X" icon={<ScanLine className="w-6 h-6 text-primary" />}>
              Diagnóstico por imagem rápido e preciso.
            </Card>

            <Card title="Ultrassom" icon={<Activity className="w-6 h-6 text-primary" />}>
              Exames de ultrassonografia com alta qualidade.
            </Card>

            <Card title="Terapias Integrativas" icon={<Flower2 className="w-6 h-6 text-primary" />}>
              Acupuntura, fitoterapia e outros cuidados complementares.
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50" id="diferenciais">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Feita para gatos</h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Ambiente sem cães para reduzir o estresse</li>
              <li>• Equipe apaixonada e treinada em manejo felino</li>
              <li>• Consultórios e internação adaptados para felinos</li>
              <li>• Atendimento humanizado para tutores</li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-emerald-500 text-white font-semibold shadow hover:shadow-md transition"
            >
              <Phone className="w-5 h-5" /> Falar no WhatsApp
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/cat.png"
              alt="Consultório felino preparado"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* TeamSection */}
      <TeamSection />

      {/* Instagram Feed */}
      {/* <InstagramGrid /> */}

      {/* Contato */}
      <section className="bg-gray-50 py-16" id="contato">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Fale com a gente</h3>
            <div className="mt-6 space-y-3 text-gray-700">
              <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary shrink-0" /> {ADDRESS}</p>
              <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-primary shrink-0" /> {PHONE_DISPLAY}</p>
              <p className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary shrink-0" /> Seg–Sex: 08:30h–17:30h • Sáb: 08:30h–12:30h</p>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={WHATSAPP_URL} target="_blank" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-emerald-500 text-white font-semibold shadow hover:shadow-md transition">
                <Phone className="w-5 h-5" /> WhatsApp
              </a>
              <a href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`} target="_blank" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white shadow hover:opacity-90 transition bg-gradient-to-r from-[#d62976] via-[#962fbf] to-[#4f5bd5]">
                Instagram
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <Image
                src="/images/cat-friendly-practice-logo.png"
                alt="Selo Cat Friendly Practice"
                width={160}
                height={60}
                className="drop-shadow-md"
              />
              <Image
                src="/images/cat-friendly-veterinarian.png"
                alt="Selo Cat Friendly Veterinarian"
                width={160}
                height={60}
                className="drop-shadow-md"
              />
            </div>
          </div>
          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow border border-primary">
            <iframe
              title="Mapa da clínica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.7335676221787!2d-47.20296011074751!3d-23.084471881142953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4b1a6267ec3%3A0xe343681089f0996b!2sR.%20Reg.%20Feij%C3%B3%2C%20220%20-%20Cidade%20Nova%20I%2C%20Indaiatuba%20-%20SP%2C%2013334-090!5e1!3m2!1spt-BR!2sbr!4v1755876339470!5m2!1spt-BR!2sbr"
              loading="lazy"
              className="w-full aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">© {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos reservados.</p>
          <p className="text-sm opacity-80">Desenvolvido por <a href={DEVELOPED_BY} target="_blank">Bruno Barretta</a></p>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, icon, children }: { title: string; icon?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-primary shadow-sm">
      <div className="flex items-center gap-3">
        {icon}
        <h4 className="font-semibold text-lg text-primary">{title}</h4>
      </div>
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{children}</p>
    </div>
  );
}