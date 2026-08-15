import { Link } from 'react-router-dom';
import { Leaf, ShoppingBasket, CircleUser } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-100 py-3 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-2">
                <Leaf className="w-7 h-7 text-feira-green" />
                <span className="font-bold text-xl text-feira-green tracking-tight">Feira Conectada</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-500">
                <Link to="/feiras" className="hover:text-feira-green transition-colors">Feiras</Link>
                <Link to="/produtos" className="hover:text-feira-green transition-colors">Produtos</Link>
                <Link to="/produtores" className="hover:text-feira-green transition-colors">Produtores</Link>
                <Link to="/mapa" className="hover:text-feira-green transition-colors">Mapa</Link>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-gray-700">
                    <button className="hover:text-feira-green transition-colors">
                        <ShoppingBasket className="w-6 h-6" />
                    </button>
                    <button className="hover:text-feira-green transition-colors">
                        <CircleUser className="w-6 h-6" />
                    </button>
                </div>
                <Link to="/login" className="bg-[#0F3524] text-white px-8 py-2.5 rounded text-sm font-medium hover:bg-green-950 transition-colors shadow-sm">
                    Entrar
                </Link>
            </div>
        </nav>
    );
}
