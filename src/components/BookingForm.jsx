import React, { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        subject: '',
        explanation: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'explanation' && value.length > 2000) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.explanation.length < 1500) {
            setError('L\'explication doit comporter au moins 1500 caractères.');
            return;
        }
        console.log('Booking Form Submitted:', formData);
        alert('Demande de rendez-vous envoyée !');
        setFormData({ subject: '', explanation: '' });
        setError('');
    };

    return (
        <div className="flex flex-col h-full group">
            <h3 className="text-2xl font-serif font-black text-[#0f172a] mb-2">Réservez une session.</h3>
            <p className="text-[10px] font-bold text-[#0d9488] uppercase tracking-[0.2em] mb-8">Accompagnement Intensif</p>

            <form onSubmit={handleSubmit} className="space-y-6 flex-grow pb-2">
                <div>
                    <label htmlFor="booking-subject" className="block text-[10px] font-bold text-[#64748b] uppercase tracking-widest mb-2">
                        Matière & Niveau
                    </label>
                    <input
                        id="booking-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#0d9488] outline-none transition-colors text-[#0f172a] font-medium"
                        placeholder="Ex: Mathématiques - Terminale S"
                        required
                    />
                </div>

                <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-end mb-2">
                        <label htmlFor="booking-explanation" className="block text-[10px] font-bold text-[#64748b] uppercase tracking-widest">
                            Description du projet d'étude
                        </label>
                        <span className={`text-[10px] font-bold ${formData.explanation.length < 1500 ? 'text-orange-300' : 'text-[#0d9488]'}`}>
                            {formData.explanation.length}/2000
                        </span>
                    </div>
                    <textarea
                        id="booking-explanation"
                        name="explanation"
                        value={formData.explanation}
                        onChange={handleChange}
                        rows="5"
                        className="w-full bg-white/50 border border-gray-100 rounded-xl p-4 focus:border-[#0d9488] outline-none transition-colors text-[#0f172a] font-medium resize-none shadow-inner"
                        placeholder="Veuillez détailler vos objectifs (Min. 1500 caractères)..."
                        required
                    ></textarea>
                </div>

                {error && <p className="text-red-400 text-[10px] font-bold uppercase tracking-wider">{error}</p>}

                <button
                    type="submit"
                    className="w-full py-4 bg-[#0d9488] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[#0f172a] transition-all shadow-xl shadow-[#0d9488]/20 active:scale-95"
                >
                    Confirmer la demande
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
