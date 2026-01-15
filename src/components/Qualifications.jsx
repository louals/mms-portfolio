import React from 'react';

// Importing the images from your assets folder
import etsLogo from '/etsmtl_logo.jpeg';
import oiqLogo from '/ordreingenieursqc_logo.jpeg';
import cegepLogo from '/cegep.jpeg';

const Qualifications = () => {
    const credentials = [
        {
            title: "Bachelor's in Mechanical Engineering",
            institution: "École de technologie supérieure (ÉTS)",
            year: "2019 - 2024",
            logo: etsLogo,
            category: "FORMATION"
        },
        {
            title: "Candidat à la profession d'ingénieur (CPI)",
            institution: "Ordre des ingénieurs du Québec (OIQ)",
            year: "Issued Apr 2025",
            logo: oiqLogo,
            category: "LICENCE"
        },
        {
            title: "DCS in Mechanical Engineering",
            institution: "Cégep de Saint-Laurent",
            year: "2016 - 2019",
            logo: cegepLogo,
            category: "FORMATION"
        },
    ];

    return (
        <section id="qualifications" className="py-24 bg-[#fcfcfc]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0d9488]">Parcours</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-[#0f172a] mt-4">Éducation & Accréditations.</h2>
                </div>

                <div className="space-y-12">
                    {credentials.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 group transition-opacity hover:opacity-100 opacity-90">
                            <div className="w-24 h-24 flex-shrink-0 bg-white shadow-xl shadow-black/5 rounded-2xl flex items-center justify-center p-4 border border-gray-100 group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src={item.logo}
                                    alt={item.institution}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex-grow">
                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0d9488] block mb-2">{item.category}</span>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-1">{item.title}</h3>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                    <p className="text-[#64748b] font-medium text-sm">{item.institution}</p>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
                                    <p className="text-sm font-bold text-[#0f172a]">{item.year}</p>
                                </div>
                            </div>
                            <div className="h-[1px] flex-grow bg-gray-100 hidden lg:block"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Qualifications;