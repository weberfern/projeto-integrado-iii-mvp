import { Link, useNavigate } from 'react-router-dom';
import { 
    Leaf, LayoutDashboard, Store, Box, Map as MapIcon, Settings, LogOut, 
    Search, ScanLine, Bell, FileText, Users, MapPin, UsersRound, ArrowRight 
} from 'lucide-react';

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const preventDefault = (e) => e.preventDefault();

    return (
        <div className="flex h-screen bg-[#F3F6F4] font-sans overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-[#0F3524] text-white flex flex-col">
                <div className="p-6 flex items-center gap-2 mb-6 cursor-pointer" onClick={() => navigate('/')}>
                    <Leaf className="w-6 h-6 text-[#75E86D]" />
                    <span className="font-bold text-lg tracking-tight">Feira Conectada</span>
                </div>
                
                <nav className="flex-1 px-4 space-y-2">
                    <a href="#" onClick={preventDefault} className="flex items-center gap-3 px-4 py-3 bg-[#1A4532] text-white rounded-lg font-medium cursor-pointer">
                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                    </a>
                    <a href="#" onClick={preventDefault} className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-[#1A4532] rounded-lg transition-colors font-medium cursor-pointer">
                        <Store className="w-5 h-5" /> Minhas Feiras
                    </a>
                    <a href="#" onClick={preventDefault} className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-[#1A4532] rounded-lg transition-colors font-medium cursor-pointer">
                        <Box className="w-5 h-5" /> Produtos
                    </a>
                    <a href="#" onClick={preventDefault} className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-[#1A4532] rounded-lg transition-colors font-medium cursor-pointer">
                        <MapIcon className="w-5 h-5" /> Mapas
                    </a>
                    <a href="#" onClick={preventDefault} className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-[#1A4532] rounded-lg transition-colors font-medium cursor-pointer">
                        <Settings className="w-5 h-5" /> Configurações
                    </a>
                </nav>

                <div className="p-4">
                    <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white w-full transition-colors font-medium cursor-pointer">
                        <LogOut className="w-5 h-5" /> Sair
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-y-auto">
                {/* Header */}
                <header className="flex justify-between items-center p-8 pb-4">
                    <div className="hidden lg:block w-[200px]"></div>
                    <div className="flex-1 max-w-2xl relative mx-auto">
                        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                        <input 
                            type="text" 
                            placeholder="Pesquisar..." 
                            className="w-full bg-white rounded-full py-3 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#75E86D]/50 text-sm"
                        />
                    </div>
                    <div className="flex items-center justify-end gap-5 ml-4 lg:w-[200px]">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 text-gray-600 cursor-pointer">
                            <ScanLine className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 text-gray-600 relative cursor-pointer">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-3 ml-2 cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="João Silva" className="w-10 h-10 rounded-full" />
                            <div className="hidden md:block">
                                <p className="text-sm font-bold text-gray-900 leading-tight">João Silva</p>
                                <p className="text-xs text-gray-500">Administrador</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-8 pt-4 flex flex-col xl:flex-row gap-8">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col gap-6">
                        <h1 className="text-2xl font-bold text-[#0F3524]">Gestão Estratégica</h1>
                        
                        {/* 3 Top Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col cursor-pointer hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-gray-900 text-sm w-2/3 leading-tight">Registrar Assembleia</h3>
                                    <FileText className="w-5 h-5 text-gray-400" />
                                </div>
                                <p className="text-gray-500 text-xs">Documentar nova ata coletiva</p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col cursor-pointer hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-gray-900 text-sm w-2/3 leading-tight">Gerenciar Fornecedores</h3>
                                    <Users className="w-5 h-5 text-gray-400" />
                                </div>
                                <p className="text-gray-500 text-xs">Cadastro e verificação de produtores</p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col cursor-pointer hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-gray-900 text-sm w-2/3 leading-tight">Gerenciar Feiras</h3>
                                    <Store className="w-5 h-5 text-gray-400" />
                                </div>
                                <p className="text-gray-500 text-xs">Logística e visibilidade regional</p>
                            </div>
                        </div>

                        {/* Middle Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Mapa de visibilidade */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex justify-between items-center mb-1">
                                    <h3 className="font-bold text-gray-900 text-sm">Mapa de visibilidade</h3>
                                    <MapPin className="w-4 h-4 text-feira-green" />
                                </div>
                                <p className="text-gray-500 text-xs mb-4">Região Cariri - CE</p>
                                
                                <div className="space-y-3">
                                    <div className="bg-[#B9E3A5] px-4 py-3 rounded-lg flex justify-between items-center cursor-pointer hover:bg-[#a8d991] transition-colors">
                                        <span className="text-sm font-semibold text-[#0F3524]">Feira do Crato</span>
                                        <span className="text-xs text-[#0F3524]">Hoje, 07:00</span>
                                    </div>
                                    <div className="bg-[#B9E3A5] px-4 py-3 rounded-lg flex justify-between items-center cursor-pointer hover:bg-[#a8d991] transition-colors">
                                        <span className="text-sm font-semibold text-[#0F3524]">Feira de Juazeiro</span>
                                        <span className="text-xs text-[#0F3524]">Amanhã, 06:00</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decisões coletivas */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-gray-900 text-sm">Decisões coletivas</h3>
                                    <UsersRound className="w-4 h-4 text-feira-green" />
                                </div>
                                
                                <div className="bg-[#8DF285] p-4 rounded-xl mb-3 cursor-pointer hover:opacity-90 transition-opacity">
                                    <h4 className="font-bold text-[#0F3524] text-sm mb-1">Acordos de preço: Tomate Cereja</h4>
                                    <p className="text-[#0F3524] text-xs">Definido valor mínimo de R$ 8,00/kg para o Cariri.</p>
                                </div>
                                <a href="#" onClick={preventDefault} className="text-feira-green text-xs font-semibold hover:underline flex items-center gap-1 cursor-pointer">
                                    Ata da Assembleia #5 <FileText className="w-3 h-3" />
                                </a>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 min-h-[250px]">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm">Desempenho das Feiras</h3>
                                    <p className="text-gray-500 text-xs">Volume de comercialização vs Meta de diversidade</p>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-medium text-gray-600">
                                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-[#3FE135] rounded-sm"></span> Volume</div>
                                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-black rounded-sm"></span> Meta de diversidade (%)</div>
                                </div>
                            </div>

                            {/* Simple CSS Chart */}
                            <div className="h-48 w-full flex items-end justify-between px-2 gap-2 relative border-b border-gray-200">
                                {/* Horizontal grid lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                    <div className="w-full border-t border-gray-100"></div>
                                    <div className="w-full border-t border-gray-100"></div>
                                    <div className="w-full border-t border-gray-100"></div>
                                    <div className="w-full border-t border-gray-100"></div>
                                    <div className="w-full border-t border-gray-100"></div>
                                </div>
                                
                                {/* Bars */}
                                {[40, 45, 80, 50, 95, 45, 40, 70, 45, 85, 40, 45].map((val, i) => (
                                    <div key={i} className="w-full max-w-[24px] flex flex-col justify-end items-center h-full relative z-10 group cursor-pointer">
                                        <div className="w-full bg-[#3FE135] rounded-t-sm transition-all hover:opacity-80" style={{ height: `${val}%` }}>
                                            <div className="w-full bg-black rounded-t-sm absolute bottom-0" style={{ height: `${val * 0.6}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full flex justify-between px-2 mt-2 text-[10px] text-gray-400 font-bold">
                                <span>JAN</span><span>FEV</span><span>MAR</span><span>ABR</span><span>MAI</span><span>JUN</span>
                                <span>JUL</span><span>AGO</span><span>SET</span><span>OUT</span><span>NOV</span><span>DEZ</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full xl:w-80 flex flex-col gap-6 mt-14 xl:mt-0">
                        {/* Top Card */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm relative h-64 border border-gray-100 group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=400&q=80" alt="Legumes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-white font-bold text-lg leading-tight mb-2">Rede<br/>EcoCeará</h3>
                                <p className="text-gray-300 text-xs mb-3 leading-relaxed">Conectando 15 novos produtores de orgânicos da região do Cariri esta semana.</p>
                                <a href="#" onClick={preventDefault} className="text-[#8DF285] text-xs font-semibold hover:underline flex items-center gap-1 cursor-pointer">
                                    Ver detalhes <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>

                        {/* Bottom Card */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex-1 flex flex-col min-h-[300px]">
                            <div className="h-32 w-full">
                                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80" alt="Agricultores" className="w-full h-full object-cover" />
                            </div>
                            <div className="bg-[#0F3524] p-6 flex-1 flex flex-col justify-center">
                                <h3 className="text-white font-bold text-sm mb-4">Escoamento<br/>Direto</h3>
                                
                                <p className="text-gray-300 text-xs mb-2">75% da meta de escoamento atingida</p>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex-1 h-1.5 bg-gray-600 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#8DF285]" style={{ width: '75%' }}></div>
                                    </div>
                                    <span className="text-[#8DF285] text-xs font-bold">75%</span>
                                </div>

                                <p className="text-gray-400 text-[11px] leading-relaxed border-t border-gray-700/50 pt-4">
                                    Novas rotas logísticas abertas para reduzir o desperdício em até 30% nas feiras de Juazeiro e Crato.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}