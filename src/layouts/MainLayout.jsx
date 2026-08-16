import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            <Navbar />
            <div className="flex-1 w-full flex flex-col">
                {children}
            </div>
            <Footer />
        </div>
    );
}
