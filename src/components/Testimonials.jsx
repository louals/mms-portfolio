import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const recommendations = [
    {
        id: 1,
        name: 'Marie L.',
        relation: 'Mère d\'élève',
        content: 'Une approche pédagogique d\'une rare clarté. Ma fille a non seulement progressé en mathématiques, mais a surtout retrouvé le plaisir d\'apprendre.',
    },
    {
        id: 2,
        name: 'Thomas D.',
        relation: 'Ancien élève',
        content: 'La rigueur d\'un ingénieur alliée à une patience infinie. Jean est le tuteur qui m\'a permis de franchir le cap du TCF sans stress.',
    },
    {
        id: 3,
        name: 'Sophie R.',
        relation: 'Mère d\'élève',
        content: 'Les concepts physiques les plus complexes deviennent limpides avec Mobin. Un accompagnement de haute qualité.',
    },
    {
        id: 4,
        name: 'Lucas G.',
        relation: 'Élève en Terminale',
        content: 'Une méthode de travail efficace et structurée. Mobin m\'a aidé à organiser mes révisions et à atteindre mes objectifs.',
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-[#fcfcfc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0d9488]">Reconnaissance</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-[#0f172a] mt-4">Accolades & Témoignages.</h2>
                </div>

                <div className="relative">
                    <motion.div
                        className="flex space-x-12 cursor-grab active:cursor-grabbing pb-12"
                        drag="x"
                        dragConstraints={{ right: 0, left: -1000 }}
                    >
                        {recommendations.map((t) => (
                            <div key={t.id} className="flex-shrink-0 w-[350px] md:w-[500px] flex flex-col items-center text-center">
                                <div className="text-[#0d9488]/20 mb-8">
                                    <Quote size={64} fill="currentColor" />
                                </div>
                                <p className="text-lg md:text-2xl font-serif italic text-[#0f172a] leading-relaxed mb-8 px-4">
                                    "{t.content}"
                                </p>
                                <div className="w-12 h-[1px] bg-gray-200 mb-6"></div>
                                <div>
                                    <h4 className="font-bold text-[#0f172a] tracking-tight">{t.name}</h4>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748b] mt-1">{t.relation}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="flex justify-center gap-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-[#0d9488]' : 'bg-gray-200'}`}></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
