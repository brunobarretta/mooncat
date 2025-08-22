"use client";
import Image from "next/image";
import { Stethoscope, GraduationCap, BadgeCheck, Instagram, Phone } from "lucide-react";

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
    crmv: "CRMV-SP 00000",
    specialties: ["Clínica Felina", "Comportamento", "Odontologia"],
    photo: "/images/team/maria.jpg",
    // instagram: "https://www.instagram.com/mooncatmedicinafelina/",
    // whatsapp: "https://api.whatsapp.com/send?phone=5519998404131",
  },
  {
    name: "Dra. Michelle Carettoni",
    role: "Médica Veterinária",
    crmv: "CRMV-SP 00001",
    specialties: ["Cirurgia", "Anestesiologia", "Ultrassonografia"],
    photo: "/images/team/joao.jpg",
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
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.photo}
                  alt={`Foto de ${p.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={false}
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-600 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-primary" />
                  {p.role}
                </p>

                {p.crmv && (
                  <p className="mt-1 text-xs text-gray-500 flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-primary" />
                    {p.crmv}
                  </p>
                )}

                {p.specialties?.length ? (
                  <div className="mt-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="font-medium">Especialidades</span>
                    </div>
                    <ul className="mt-1 list-disc list-inside space-y-1">
                      {p.specialties.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
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
                        <Instagram className="w-4 h-4" />
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
