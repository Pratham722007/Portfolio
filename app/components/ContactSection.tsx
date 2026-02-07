'use client';

import ComicBackground from './ComicBackground';
import ScrollReveal from './ScrollReveal';

import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Fire request in background (optimistic)
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        }).catch(err => console.error('Email send failed:', err));

        // Artificial delay for UX "Sending..." state
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-lg md:text-xl font-bold mb-2 text-black">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border-2 border-black p-3 rounded focus:bg-white focus:shadow-[4px_4px_0px_#FD0809] transition-all outline-none text-black"
                    placeholder="Your Name"
                />
            </div>
            <div>
                <label className="block text-lg md:text-xl font-bold mb-2 text-black">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border-2 border-black p-3 rounded focus:bg-white focus:shadow-[4px_4px_0px_#FD0809] transition-all outline-none text-black"
                    placeholder="your@email.com"
                />
            </div>
            <div>
                <label className="block text-lg md:text-xl font-bold mb-2 text-black">Message</label>
                <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border-2 border-black p-3 rounded focus:bg-white focus:shadow-[4px_4px_0px_#FD0809] transition-all outline-none text-black"
                    placeholder="What's on your mind?"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`comic-button w-full text-lg transition-all ${status === 'success' ? 'bg-green-500 text-white border-green-700' :
                    status === 'error' ? 'bg-red-500 text-white border-red-700' :
                        'bg-black text-white hover:bg-gray-800'
                    }`}
            >
                {status === 'loading' ? 'Sending...' :
                    status === 'success' ? 'Message Sent! 🚀' :
                        status === 'error' ? 'Error. Try Again.' :
                            'Send Message'}
            </button>
        </form>
    );
}

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <ComicBackground />


            <div className="comic-container px-4 relative z-10">
                <ScrollReveal width="100%">
                    <div className="max-w-4xl mx-auto bg-white border-4 border-black box-shadow-comic p-6 md:p-12 rounded-lg relative mt-6 md:mt-0">

                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 md:-top-6 md:-left-6 md:translate-x-0 bg-yellow-400 border-2 border-black px-4 py-2 md:rotate-[-5deg] shadow-[4px_4px_0px_#000] z-20 whitespace-nowrap">
                            <h2 className="text-2xl md:text-4xl font-black text-black">LET'S TALK!</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-6 md:mt-2">

                            {/* Contact Form */}
                            <div>
                                <ContactForm />
                            </div>

                            {/* Direct Info */}
                            <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-black">
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2">Get in Touch</h3>
                                    <p className="text-base md:text-lg">
                                        <span className="block font-bold">📞 Phone:</span>
                                        <a href="tel:+918128135707" className="hover:text-primary transition-colors">+91 8128135707</a>
                                    </p>
                                    <p className="text-base md:text-lg mt-2">
                                        <span className="block font-bold">📧 Email:</span>
                                        <a href="mailto:patadiyapratham98@gmail.com" className="hover:text-primary transition-colors break-words">patadiyapratham98@gmail.com</a>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">Connect</h3>
                                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                        {/* Social Links */}
                                        <a href="https://linkedin.com" target="_blank" className="comic-button text-xs md:text-sm px-4 py-2">LinkedIn</a>
                                        <a href="https://github.com/Pratham722007" target="_blank" className="comic-button text-xs md:text-sm px-4 py-2">GitHub</a>
                                        <a href="https://leetcode.com" target="_blank" className="comic-button text-xs md:text-sm px-4 py-2">LeetCode</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
