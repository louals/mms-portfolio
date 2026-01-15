import React from 'react';
import banner from '/banner.jpeg';
import profile from '/profile.jpeg';

const Hero = () => {
    return (
        <section className="relative max-w-7xl mx-auto pt-24 pb-12 px-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/5 border border-gray-100">
                {/* Banner */}
                <div className="w-full h-48 md:h-72 overflow-hidden relative">
                    <img
                        src={banner}
                        alt="Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]/20"></div>
                </div>

                {/* Profile and Content Container */}
                <div className="px-8 pb-10">
                    <div className="relative flex flex-col items-start">
                        {/* Round Profile overlapping banner */}
                        <div className="relative -mt-16 md:-mt-24 mb-6">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-gray-100">
                                <img
                                    src={profile}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                            <div className="lg:col-span-8">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0d9488] mb-3 block">
                                    Ingénierie & Excellence Académique
                                </span>
                                <h1 className="text-4xl md:text-5xl font-serif font-black text-[#0f172a] leading-tight mb-4">
                                    Mobin Mir <span className="text-[#0d9488]">Shekari.</span>
                                </h1>
                                <p className="text-lg text-[#64748b] font-medium leading-relaxed max-w-2xl">
                                    Tuteur spécialisé en Français, Mathématiques et Physique. Un accompagnement rigoureux pour transformer votre parcours académique.
                                </p>
                            </div>

                            <div className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end">
                                <a
                                    href="#contact"
                                    className="px-8 py-3.5 bg-[#0f172a] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all hover:bg-[#0d9488] shadow-lg shadow-black/10 active:scale-95"
                                >
                                    Me Contacter
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-50 w-full flex flex-wrap gap-6 items-center">
                            <div className="flex gap-4">
                                <span className="px-3 py-1 rounded-full bg-gray-100 text-[#64748b] text-[9px] font-bold uppercase tracking-widest">Tcf & Général</span>
                                <span className="px-3 py-1 rounded-full bg-gray-100 text-[#64748b] text-[9px] font-bold uppercase tracking-widest">Mathématiques</span>
                                <span className="px-3 py-1 rounded-full bg-gray-100 text-[#64748b] text-[9px] font-bold uppercase tracking-widest">Physique</span>
                            </div>
                            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
                            <p className="text-[11px] text-[#64748b] font-medium italic">Grand Montréal, Québec, Canada</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
