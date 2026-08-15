import { Link } from 'react-router-dom';
import { FileText, Share2, Rss } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#EBECEB] py-12 px-6 md:px-12 mt-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Feira Conectada</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                        <p>&copy; 2026 Feira Conectada.</p>
                        <p>Conectando o campo à sua mesa.</p>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-bold text-[#4B6B58] mb-4 text-sm">Navegação</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li><Link to="/privacidade" className="hover:text-feira-green transition-colors">Privacidade</Link></li>
                        <li><Link to="/termos" className="hover:text-feira-green transition-colors">Termos</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-[#4B6B58] mb-4 text-sm">Empresa</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li><Link to="/suporte" className="hover:text-feira-green transition-colors">Suporte</Link></li>
                        <li><Link to="/sobre" className="hover:text-feira-green transition-colors">Sobre</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-[#4B6B58] mb-4 text-sm">Siga-nos</h4>
                    <div className="flex gap-4 text-[#4B6B58]">
                        <Link to="#" className="hover:text-feira-green transition-colors"><FileText className="w-5 h-5" /></Link>
                        <Link to="#" className="hover:text-feira-green transition-colors"><Share2 className="w-5 h-5" /></Link>
                        <Link to="#" className="hover:text-feira-green transition-colors"><Rss className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
