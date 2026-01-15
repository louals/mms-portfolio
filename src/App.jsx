import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Qualifications from './components/Qualifications';
import ContactForm from './components/ContactForm';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col pt-0 font-sans selection:bg-[#0d9488]/20">
      <Navbar />

      <main className="flex-grow">
        {/* Editorial Hero */}
        <Hero />

        {/* Expertises (Dark Section) */}
        <Services />

        {/* Formation (Ivory Section) */}
        <Qualifications />

        {/* Accolades (Ivory Section) */}
        <Testimonials />

        {/* Contact Section (White focused) */}
        <section id="contact" className="py-24 bg-white border-y border-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0d9488]">Communication</span>
                <h2 className="text-4xl font-serif font-black mt-4 mb-6 leading-tight text-[#0f172a]">Contact <br />Direct.</h2>
                <p className="text-[#64748b] text-sm leading-relaxed mb-8">
                  Besoin d'un renseignement ou d'une précision sur mes services ? Utilisez ce formulaire pour une réponse rapide.
                </p>
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <p className="text-[10px] font-bold text-[#0f172a] uppercase tracking-widest">Informations</p>
                  <p className="text-sm font-medium text-[#64748b]">mobin.mirshekari@gmail.com</p>
                </div>
              </div>
              <div className="md:w-2/3 bg-[#fcfcfc] rounded-3xl p-8 border border-gray-100 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section (Dark focused) */}
        <section id="booking" className="py-24 bg-[#0f172a] text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row-reverse gap-16">
              <div className="md:w-1/3">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0d9488]">Consultation</span>
                <h2 className="text-4xl font-serif font-black mt-4 mb-6 leading-tight">Session <br />Intensive.</h2>
                <p className="text-[#64748b] text-sm leading-relaxed mb-8">
                  Prêt à commencer ? Réservez votre séance de tutorat approfondie en détaillant vos objectifs académiques ci-contre.
                </p>
                <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-[9px] font-bold text-[#0d9488] uppercase tracking-widest italic">Rappel</p>
                  <p className="text-[11px] text-[#64748b]">L'explication détaillée requiert un minimum de 1500 caractères.</p>
                </div>
              </div>
              <div className="md:w-2/3 bg-white rounded-3xl p-8 shadow-2xl">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#fcfcfc] py-16">
        <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-serif text-2xl font-black text-[#0f172a]">MMS.</div>

            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748b]">
              <a href="#services" className="hover:text-[#0d9488] transition-colors">Expertises</a>
              <a href="#qualifications" className="hover:text-[#0d9488] transition-colors">Formation</a>
              <a href="#testimonials" className="hover:text-[#0d9488] transition-colors">Accolades</a>
              <a href="#contact" className="hover:text-[#0d9488] transition-colors">Contact</a>
            </div>

            <p className="text-[10px] font-bold text-[#64748b] opacity-50 uppercase tracking-widest">
              © 2026 MOBIN MIR SHEKARI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
