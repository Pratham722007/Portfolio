import ScrollReveal from './ScrollReveal';

export default function Footer() {
    return (
        <footer className="bg-yellow-400 text-black py-8 border-t-8 border-black">
            <ScrollReveal width="100%">
                <div className="container mx-auto px-4 text-center">
                    <p className="font-heading text-xl tracking-wider">
                        DESIGNED & BUILT BY <span className="text-black">PRATHAM PATADIYA</span>
                    </p>
                    <p className="text-black font-bold text-sm mt-2 font-body">
                        © {new Date().getFullYear()} • Powered by Code & Coffee
                    </p>
                </div>
            </ScrollReveal>
        </footer>
    );
}
