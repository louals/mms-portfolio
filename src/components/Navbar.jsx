import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Expertises', href: '#services' },
    { name: 'Formation', href: '#qualifications' },
    { name: 'Accolades', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-6 py-2.5 flex items-center gap-8">
        <div className="flex items-center gap-2 pr-4 border-r border-gray-100">
          <span className="font-serif text-xl font-bold text-[#0f172a] tracking-tight">MMS.</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-[#64748b] hover:text-[#0d9488] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="#booking"
          className="bg-[#0f172a] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full hover:bg-[#0d9488] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
        >
          Réserver
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
