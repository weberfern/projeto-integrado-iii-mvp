import { Link } from 'react-router-dom';
import { FileText, Share2, Rss } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#EBECEB] py-10 md:py-12 px-6 md:px-12 mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Feira Conectada</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 md:mb-0">
                            O frescor que você merece, com a agilidade que a sua rotina precisa.
                        </p>
                    </div>
                    
                    {/* Links Grid (2 columns on mobile) */}
                    <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-[#4B6B58] mb-4 text-sm uppercase tracking-wider">Navegação</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li><Link to="/privacidade" onClick={(e) => e.preventDefault()} className="hover:text-feira-green transition-colors">Privacidade</Link></li>
                                <li><Link to="/termos" onClick={(e) => e.preventDefault()} className="hover:text-feira-green transition-colors">Termos</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#4B6B58] mb-4 text-sm uppercase tracking-wider">Empresa</h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li><Link to="/suporte" onClick={(e) => e.preventDefault()} className="hover:text-feira-green transition-colors">Suporte</Link></li>
                                <li><Link to="/sobre" onClick={(e) => e.preventDefault()} className="hover:text-feira-green transition-colors">Sobre</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="col-span-1">
                        <h4 className="font-bold text-[#4B6B58] mb-4 text-sm uppercase tracking-wider">Siga-nos</h4>
                        <div className="flex gap-4 text-[#4B6B58]">
                            <Link to="#" onClick={(e) => e.preventDefault()} className="bg-white hover:bg-[#75E86D] hover:text-[#0F3524] transition-colors p-2.5 rounded-full shadow-sm"><FileText className="w-4 h-4" /></Link>
                            <Link to="#" onClick={(e) => e.preventDefault()} className="bg-white hover:bg-[#75E86D] hover:text-[#0F3524] transition-colors p-2.5 rounded-full shadow-sm"><Share2 className="w-4 h-4" /></Link>
                            <Link to="#" onClick={(e) => e.preventDefault()} className="bg-white hover:bg-[#75E86D] hover:text-[#0F3524] transition-colors p-2.5 rounded-full shadow-sm"><Rss className="w-4 h-4" /></Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-300/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center md:text-left">
                    <p>&copy; 2026 Feira Conectada. Todos os direitos reservados.</p>
                    <div className="flex items-center gap-2">
                        <span>Conectando o campo à sua mesa 🍃</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
