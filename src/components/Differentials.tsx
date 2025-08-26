import { Phone, SquareCheckBig } from "lucide-react";
import Image from "next/image";

interface DifferentialsProps {
	whatsAppUrl: string;
}

export function Differentials({ whatsAppUrl }: DifferentialsProps) {

	return (
		<section className="py-16 bg-gray-50" id="diferenciais">
			<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
				<div className="order-2 md:order-1">
					<h3 className="text-2xl md:text-3xl font-bold">Feita para gatos</h3>
					<div className="mt-6 space-y-3 text-gray-700">
						<div className="flex items-center gap-3 mb-3">
							<SquareCheckBig className="w-6 h-6 shrink-0 text-primary" />
							<p className="text-md text-gray-700">Ambiente sem cães para reduzir o estresse</p>
						</div>
						<div className="flex items-center gap-3 mb-3">
							<SquareCheckBig className="w-6 h-6 shrink-0 text-primary" />
							<p className="text-md text-gray-700">Equipe apaixonada e treinada em manejo felino</p>
						</div>
						<div className="flex items-center gap-3 mb-3">
							<SquareCheckBig className="w-6 h-6 shrink-0 text-primary" />
							<p className="text-md text-gray-700">Consultórios e internação adaptados para felinos</p>
						</div>
						<div className="flex items-center gap-3 mb-3">
							<SquareCheckBig className="w-6 h-6 shrink-0 text-primary" />
							<p className="text-md text-gray-700">Atendimento humanizado para tutores</p>
						</div>
					</div>
					<a
						href={whatsAppUrl}
						target="_blank"
						className="mt-6 inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-primary text-white font-semibold shadow hover:shadow-md transition"
					>
						<Phone className="w-5 h-5" /> Falar no WhatsApp
					</a>
				</div>
				<div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg order-1 md:order-2">
					<Image
						src="/images/clinic.jpeg"
						alt="Consultório felino preparado"
						fill
						className="object-cover hover:scale-105 transition-transform duration-700"
					/>
				</div>
			</div>
		</section>
	)
}