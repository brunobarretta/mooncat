"use client";
import Image from "next/image";
import { Stethoscope, BadgeCheck, Phone, Check } from "lucide-react";

type Professional = {
  name: string;
  role: string;
  crmv?: string;
  specialties?: string[];
  photo: string; 
  instagram?: string; 
  whatsapp?: string;  
};

const TEAM: Professional[] = [
  {
    name: "Dra. Júlia Maestrello",
    role: "Médica Veterinária",
    crmv: "CRMV-SP 46465",
    specialties: [
      "Médica veterinária especializada em clínica médica e cirúrgica de felinos", 
      "Certificação internacional de padrão de atendimento Cat Friendly (padrão ouro de atendimento aos gatos)", 
      "Palestrante de Medicina Felina ",
      "Comunicadora Animal"
    ],
    photo: "/images/team/julia-maestrello.jpeg"
  },
  {
    name: "Dra. Michelle Carettoni",
    role: "Médica Veterinária",
    crmv: "CRMV-SP 57379",
    specialties: [
      "Médica veterinária especializada em medicina felina e também fisioterapeuta humana - com ênfase em terapias com animais",
      "Especializada em terapias integrativas"
    ],
    photo: "/images/team/michelle-carettoni.jpeg"
  }
];

export function TeamSection() {
  return (
    <section className="py-20" id="equipe">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Nossa Equipe</h2>
        <p className="text-center text-gray-600 mt-2">Conheça os profissionais que cuidam do seu gato com dedicação.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {TEAM.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-primary bg-white overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative aspect-[3/3]">
                <Image
                  src={p.photo}
                  alt={`Foto de ${p.name}`}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-600 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  {p.role}
                </p>

                {p.crmv && (
                  <p className="mt-1 text-xs text-gray-500 flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-primary" />
                    {p.crmv}
                  </p>
                )}

                {p.specialties?.length ? (
                  <div className="mt-4">
                      {p.specialties.map((s) => (
                        <div key={s} className="flex items-center gap-2 mb-1">
                          <Check className="w-5 h-5 shrink-0 text-primary" />
                          <p className="text-sm text-gray-700">{s}</p>
                        </div>
                      ))}
                  </div>
                ) : null}

                {(p.instagram || p.whatsapp) && (
                  <div className="mt-5 flex gap-2">
                    {p.instagram && (
                      <a
                        href={p.instagram}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-white font-medium shadow hover:opacity-90 transition bg-gradient-to-r from-[#feda75] via-[#d62976] via-[#962fbf] to-[#4f5bd5]"
                        aria-label={`Instagram de ${p.name}`}
                      >
                        Instagram
                      </a>
                    )}
                    {p.whatsapp && (
                      <a
                        href={p.whatsapp}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-primary text-white font-medium shadow hover:opacity-90 transition"
                        aria-label={`WhatsApp de ${p.name}`}
                      >
                        <Phone className="w-4 h-4" />
                        WhatsApp
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
