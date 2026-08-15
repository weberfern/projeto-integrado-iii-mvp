import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-2">
                <Sprout className="w-8 h-8 text-feira-green" />
                <span className="font-bold text-xl text-feira-green tracking-tight">Feira Conectada</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                <Link to="/" className="hover:text-feira-green transition-colors">Início</Link>
                <Link to="/#feiras" className="hover:text-feira-green transition-colors">Feiras</Link>
                <Link to="/#produtos" className="hover:text-feira-green transition-colors">Produtos</Link>
                <Link to="/#produtores" className="hover:text-feira-green transition-colors">Produtores</Link>
            </div>

            <div className="flex items-center gap-4">
                <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-feira-green transition-colors">
                    Criar conta
                </Link>
                <Link to="/login" className="bg-feira-green text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors shadow-sm">
                    Entrar
                </Link>
            </div>
        </nav>
    );
}
