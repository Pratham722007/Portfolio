'use client';

import ComicBackground from './ComicBackground';

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <ComicBackground />

            <div className="comic-container px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white border-4 border-black box-shadow-comic p-8 md:p-12 rounded-lg relative">

                    <div className="absolute -top-6 -left-6 bg-yellow-400 border-2 border-black px-4 py-2 rotate-[-5deg] shadow-[4px_4px_0px_#000]">
                        <h2 className="text-4xl font-black text-black">LET'S TALK!</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">

                        {/* Contact Form */}
                        <div>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-xl font-bold mb-2 text-black">Name</label>
                                    <input type="text" className="w-full bg-gray-100 border-2 border-black p-3 rounded focus:bg-white focus:shadow-[4px_4px_0px_#FD0809] transition-all outline-none text-black" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-xl font-bold mb-2 text-black">Email</label>
                                    <input type="email" className="w-full bg-gray-100 border-2 border-black p-3 rounded focus:bg-white focus:shadow-[4px_4px_0px_#FD0809] transition-all outline-none text-black" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label className="block text-xl font-bold mb-2 text-black">Message</label>
                                    <textarea rows={4} className="w-full bg-gray-100 border-2 border-black p-3 rounded focus:bg-white focus:shadow-[4px_4px_0px_#FD0809] transition-all outline-none text-black" placeholder="What's on your mind?"></textarea>
                                </div>
                                <button type="submit" className="comic-button bg-black text-white hover:bg-gray-800 w-full">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Direct Info */}
                        <div className="flex flex-col justify-center space-y-8 text-black">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                                <p className="text-lg">
                                    <span className="block font-bold">📞 Phone:</span>
                                    <a href="tel:+918128135707" className="hover:text-primary transition-colors">+91 8128135707</a>
                                </p>
                                <p className="text-lg mt-2">
                                    <span className="block font-bold">📧 Email:</span>
                                    <a href="mailto:patadiyapratham98@gmail.com" className="hover:text-primary transition-colors">patadiyapratham98@gmail.com</a>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Connect</h3>
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    {/* Social Links - Using simple buttons for now */}
                                    <a href="https://linkedin.com" target="_blank" className="comic-button text-sm px-4 py-2">LinkedIn</a>
                                    <a href="https://github.com/Pratham722007" target="_blank" className="comic-button text-sm px-4 py-2">GitHub</a>
                                    <a href="https://leetcode.com" target="_blank" className="comic-button text-sm px-4 py-2">LeetCode</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
