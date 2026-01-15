import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        subject: '',
        explanation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'explanation' && value.length > 1500) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Form Submitted:', formData);
        alert('Message envoyé avec succès !');
        setFormData({ subject: '', explanation: '' });
    };

    return (
        <div className="flex flex-col h-full">
            <h3 className="text-2xl font-serif font-black text-[#0f172a] mb-8">Posez une question.</h3>
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                <div>
                    <label htmlFor="contact-subject" className="block text-[10px] font-bold text-[#64748b] uppercase tracking-widest mb-2">
                        Objet de votre message
                    </label>
                    <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#0d9488] outline-none transition-colors text-[#0f172a] font-medium"
                        placeholder="Comment puis-je vous aider ?"
                        required
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-end mb-2">
                        <label htmlFor="contact-explanation" className="block text-[10px] font-bold text-[#64748b] uppercase tracking-widest">
                            Détails supplémentaires
                        </label>
                        <span className="text-[10px] text-gray-300">
                            {formData.explanation.length}/1500
                        </span>
                    </div>
                    <textarea
                        id="contact-explanation"
                        name="explanation"
                        value={formData.explanation}
                        onChange={handleChange}
                        rows="5"
                        className="w-full bg-white/50 border border-gray-100 rounded-xl p-4 focus:border-[#0d9488] outline-none transition-colors text-[#0f172a] font-medium resize-none shadow-inner"
                        placeholder="Expliquez brièvement votre besoin..."
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-4 bg-[#0f172a] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[#0d9488] transition-all shadow-xl shadow-black/10 active:scale-95"
                >
                    Envoyer la demande
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
