import { Link } from 'react-router-dom';
import { LayoutDashboard, Store, Package, Map, Settings, LogOut } from 'lucide-react';

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar Lateral */}
            <aside className="w-64 bg-feira-green text-white flex flex-col p-4">
                <div className="text-xl font-bold mb-10 flex items-center gap-2">
                    🌿 Feira Conectada
                </div>
                <nav className="flex flex-col gap-2 flex-grow">
                    <Link to="/dashboard" className="flex items-center gap-3 bg-green-800 p-2 rounded-md">
                        <LayoutDashboard size={20} /> Dashboard
                    </Link>
                    <Link to="#" className="flex items-center gap-3 p-2 hover:bg-green-800 rounded-md transition">
                        <Store size={20} /> Minhas Feiras
                    </Link>
                    <Link to="#" className="flex items-center gap-3 p-2 hover:bg-green-800 rounded-md transition">
                        <Package size={20} /> Produtos
                    </Link>
                    <Link to="#" className="flex items-center gap-3 p-2 hover:bg-green-800 rounded-md transition">
                        <Map size={20} /> Mapas
                    </Link>
                    <Link to="#" className="flex items-center gap-3 p-2 hover:bg-green-800 rounded-md transition">
                        <Settings size={20} /> Configurações
                    </Link>
                </nav>
                <Link to="/" className="flex items-center gap-3 p-2 hover:bg-green-800 rounded-md mt-auto">
                    <LogOut size={20} /> Sair
                </Link>
            </aside>

            {/* Conteúdo Principal */}
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex justify-between items-center mb-8">
                    <div className="w-96">
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-feira-green"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="font-semibold text-sm">João Silva</p>
                            <p className="text-xs text-gray-500">Administrador</p>
                        </div>
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    </div>
                </header>

                <h2 className="text-2xl font-bold mb-6">Gestão Estratégica</h2>

                {/* Cards de Resumo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold mb-1">Registrar Assembleia</h3>
                        <p className="text-sm text-gray-500">Documentar nova ata coletiva</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold mb-1">Gerenciar Fornecedores</h3>
                        <p className="text-sm text-gray-500">Cadastro e verificação de produtores</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold mb-1">Gerenciar Feiras</h3>
                        <p className="text-sm text-gray-500">Logística e visibilidade regional</p>
                    </div>
                </div>

                {/* Informações Extras (Mapa e Acordos) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold mb-4">Mapa de visibilidade</h3>
                        <div className="bg-green-100 text-feira-green p-3 rounded-md mb-2 flex justify-between">
                            <span>Feira do Crato</span> <span>Hoje, 07:00</span>
                        </div>
                        <div className="bg-green-100 text-feira-green p-3 rounded-md flex justify-between">
                            <span>Feira de Juazeiro</span> <span>Amanhã, 06:00</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold mb-4">Decisões coletivas</h3>
                        <div className="bg-green-100 text-feira-green p-4 rounded-md">
                            <h4 className="font-bold">Acordos de preço: Tomate Cereja</h4>
                            <p className="text-sm mt-1">Definido valor mínimo de R$ 8,00/kg para o Cariri.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}