import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-12 px-6 md:px-12 mt-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link to="/" className="flex items-center gap-2 mb-4">
                        <Sprout className="w-6 h-6 text-feira-green" />
                        <span className="font-bold text-lg text-feira-green">Feira Conectada</span>
                    </Link>
                    <p className="text-gray-500 text-sm max-w-sm">
                        Conectando produtores rurais a consumidores locais. Produtos frescos, direto de quem planta, para a sua mesa.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Plataforma</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><Link to="/#feiras" className="hover:text-feira-green transition-colors">Encontrar Feiras</Link></li>
                        <li><Link to="/#produtos" className="hover:text-feira-green transition-colors">Catálogo de Produtos</Link></li>
                        <li><Link to="/#produtores" className="hover:text-feira-green transition-colors">Nossos Produtores</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><Link to="#" className="hover:text-feira-green transition-colors">Termos de Uso</Link></li>
                        <li><Link to="#" className="hover:text-feira-green transition-colors">Política de Privacidade</Link></li>
                        <li><Link to="#" className="hover:text-feira-green transition-colors">Contato</Link></li>
                    </ul>
                </div>
            </div>
            
            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Feira Conectada. Todos os direitos reservados.</p>
                <p className="mt-2 md:mt-0">Projeto Integrado III - UFCA</p>
            </div>
        </footer>
    );
}
