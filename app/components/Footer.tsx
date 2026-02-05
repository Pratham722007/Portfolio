export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 border-t-8 border-primary">
            <div className="container mx-auto px-4 text-center">
                <p className="font-heading text-xl tracking-wider">
                    DESIGNED & BUILT BY <span className="text-primary">PRATHAM PATADIYA</span>
                </p>
                <p className="text-gray-500 text-sm mt-2 font-body">
                    © {new Date().getFullYear()} • Powered by Code & Coffee
                </p>
            </div>
        </footer>
    );
}
