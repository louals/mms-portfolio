
import { BookOpen, Calculator, Atom } from 'lucide-react';

const services = [
    {
        title: 'Expertise Linguistique',
        subtitle: 'Français (TCF & Général)',
        description: 'Une immersion structurée dans la langue française, alliant rigueur grammaticale et aisance orale pour une préparation optimale au TCF.',
        icon: BookOpen,
    },
    {
        title: 'Raisonnement Analytique',
        subtitle: 'Mathématiques',
        description: 'Démystifier les abstractions mathématiques par une approche logique et pratique, du calcul algébrique à l\'analyse complexe.',
        icon: Calculator,
    },
    {
        title: 'Exploration Physique',
        subtitle: 'Physique',
        description: 'Apprivoiser les lois de l\'univers à travers une compréhension profonde des concepts et une méthode de résolution de problèmes éprouvée.',
        icon: Atom,
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-[#0f172a] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0d9488]">Méthodologie</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-black mt-4">Services de Tutorat d'Excellence.</h2>
                    </div>
                    <p className="text-[#64748b] max-w-sm text-sm font-medium leading-relaxed">
                        Trois piliers académiques pour un accompagnement sur mesure, conçu pour transformer les défis en réussites.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                    {services.map((service) => (
                        <div key={service.title} className="p-10 bg-[#0f172a] hover:bg-[#1e293b] transition-colors group">
                            <div className="w-12 h-12 rounded bg-[#0d9488]/20 flex items-center justify-center text-[#0d9488] mb-8 group-hover:scale-110 transition-transform">
                                <service.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0d9488] mb-2">{service.subtitle}</h3>
                            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                            <p className="text-sm text-[#64748b] leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
