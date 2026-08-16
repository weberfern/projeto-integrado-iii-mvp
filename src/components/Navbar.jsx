import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShoppingBasket, CircleUser, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100 py-3 px-4 md:px-12 sticky top-0 z-50">
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/favicon.png" alt="Feira Conectada Logo" className="w-6 h-6 object-contain" />
                    <span className="font-bold text-xl text-feira-green tracking-tight">Feira Conectada</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-500">
                    <Link to="/feiras" onClick={(e) => e.preventDefault()} className="hover:text-feira-green transition-colors">Feiras</Link>
                    <Link to="/produtos" onClick={(e) => e.preventDefault()} className="hover:text-feira-green transition-colors">Produtos</Link>
                    <Link to="/produtores" onClick={(e) => e.preventDefault()} className="hover:text-feira-green transition-colors">Produtores</Link>
                    <Link to="/mapa" onClick={(e) => e.preventDefault()} className="hover:text-feira-green transition-colors">Mapa</Link>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-3 md:gap-4 text-gray-700">
                        <button className="hover:text-feira-green transition-colors cursor-pointer">
                            <ShoppingBasket className="w-6 h-6" />
                        </button>
                        <button className="hidden md:block hover:text-feira-green transition-colors cursor-pointer">
                            <CircleUser className="w-6 h-6" />
                        </button>
                    </div>
                    <Link to="/login" className="hidden md:flex bg-[#0F3524] text-white px-8 py-2.5 rounded text-sm font-medium hover:bg-green-950 transition-colors shadow-sm">
                        Entrar
                    </Link>
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 hover:text-feira-green cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
                    <Link to="/feiras" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }} className="text-gray-600 font-medium hover:text-feira-green">Feiras</Link>
                    <Link to="/produtos" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }} className="text-gray-600 font-medium hover:text-feira-green">Produtos</Link>
                    <Link to="/produtores" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }} className="text-gray-600 font-medium hover:text-feira-green">Produtores</Link>
                    <Link to="/mapa" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }} className="text-gray-600 font-medium hover:text-feira-green">Mapa</Link>
                    <hr className="border-gray-100" />
                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="bg-[#0F3524] text-white text-center px-4 py-3 rounded font-medium hover:bg-green-950 transition-colors shadow-sm w-full">
                        Entrar ou Criar Conta
                    </Link>
                </div>
            )}
        </nav>
    );
}
