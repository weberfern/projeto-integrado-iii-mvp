import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Truck, Leaf, Star, Tractor } from 'lucide-react';

export default function Home() {
    return (
        <main className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] flex items-center">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')" }}
                >
                    <div className="absolute inset-0 bg-white/70 sm:bg-white/50 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Sua feira favorita, <span className="text-feira-green">conectada</span> à sua rotina.
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                            Levamos o frescor dos melhores produtores locais diretamente para sua mesa, com a facilidade e agilidade que o seu dia a dia pede.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/feiras" onClick={(e) => e.preventDefault()} className="w-full sm:w-auto bg-[#0F3524] text-white px-6 py-3 rounded text-sm font-medium hover:bg-green-950 transition-colors shadow-sm flex items-center justify-center gap-2">
                                Começar Agora <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/ofertas" onClick={(e) => e.preventDefault()} className="w-full sm:w-auto bg-white text-feira-green border border-feira-green px-6 py-3 rounded text-sm font-medium hover:bg-green-50 transition-colors shadow-sm text-center">
                                Ver Ofertas
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nossas Feiras */}
            <section className="w-full relative pt-16 pb-24">
                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-[#0F3524] mb-2">Nossas Feiras</h2>
                            <p className="text-gray-600">Explore os mercados mais próximos de você.</p>
                        </div>
                        <Link to="/feiras" onClick={(e) => e.preventDefault()} className="text-feira-green text-sm font-medium hover:underline hidden sm:flex items-center gap-1">
                            Ver todas as feiras <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Grande (Esquerda) */}
                        <div className="md:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer h-[300px] md:h-[400px] shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80"
                                alt="Feira da Glória"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white/95 via-white/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                <span className="bg-[#96D994] text-[#0F3524] text-xs font-bold px-3 py-1 rounded mb-3 inline-block">DESTAQUE</span>
                                <h3 className="text-gray-900 text-2xl font-bold mb-1">Feira da Glória</h3>
                                <p className="text-gray-700 text-sm mb-4">Tradição e frescor no coração da cidade.</p>
                                <button className="bg-[#0F3524] text-white px-8 py-2.5 rounded text-sm font-medium hover:bg-green-950 transition-colors shadow-sm cursor-pointer">
                                    Ver
                                </button>
                            </div>
                        </div>

                        {/* Menores (Direita) */}
                        <div className="flex flex-col gap-6 h-auto md:h-[400px]">
                            {/* Top */}
                            <div className="relative rounded-xl overflow-hidden group cursor-pointer h-[200px] md:flex-1 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=600&q=80"
                                    alt="Mercado Central"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-5">
                                    <h3 className="text-white font-bold mb-1">Mercado Central</h3>
                                    <p className="text-gray-300 text-xs">Orgânicos Certificados</p>
                                </div>
                            </div>
                            {/* Bottom */}
                            <div className="relative rounded-xl overflow-hidden group cursor-pointer h-[200px] md:flex-1 shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
                                    alt="Feira da Vila"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-5">
                                    <h3 className="text-white font-bold mb-1">Feira da Vila</h3>
                                    <p className="text-gray-300 text-xs">Produtos da Região</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Do Campo à sua Mesa */}
            <section className="w-full bg-[#FAFAFA] py-16">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Campo à sua Mesa</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Simplificamos o processo para que você receba o melhor de cada colheita sem complicações.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-6">
                                <ShoppingCart className="w-8 h-8 text-feira-green" />
                            </div>
                            <h3 className="font-bold text-lg mb-3">Escolha online</h3>
                            <p className="text-gray-500 text-sm">Navegue pelas feiras da sua região e selecione seus produtos favoritos.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-6">
                                <Truck className="w-8 h-8 text-feira-green" />
                            </div>
                            <h3 className="font-bold text-lg mb-3">Entrega Ágil</h3>
                            <p className="text-gray-500 text-sm">Receba no mesmo dia ou agende para quando for melhor para você.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-6">
                                <Tractor className="w-8 h-8 text-feira-green" />
                            </div>
                            <h3 className="font-bold text-lg mb-3">Colheita Direta</h3>
                            <p className="text-gray-500 text-sm">Os produtores preparam seu pedido com o que há de mais fresco no dia.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Produtores Parceiros */}
            <section className="w-full max-w-6xl mx-auto py-20 px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-[#84C29B] font-bold text-xs tracking-wider uppercase mb-3 block">Nossos Parceiros</span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
                            Produtores que fazem a diferença
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Trabalhamos apenas com produtores locais certificados, garantindo práticas sustentáveis e a máxima qualidade para sua família.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Família Oliveira" className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Família Oliveira</h4>
                                    <p className="text-gray-500 text-xs">Especialistas em folhagens hidropônicas</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=100&q=80" alt="Sítio Beija-Flor" className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Sítio Beija-Flor</h4>
                                    <p className="text-gray-500 text-xs">Frutas tropicais e sazonais</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-8 md:mt-0">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-[#D1EEDC] blur-3xl rounded-full z-0 opacity-70"></div>

                        <img
                            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                            alt="Plantação"
                            className="relative z-10 w-full h-[400px] object-cover rounded-xl shadow-xl border-4 border-white"
                        />

                        {/* Rating Card */}
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-6 bg-white p-5 rounded-xl shadow-lg z-20 w-[90%] sm:w-64 border border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Star className="w-5 h-5 text-feira-green fill-feira-green" />
                                <span className="font-bold text-gray-900">4.9/5.0</span>
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Média de avaliação dos nossos clientes sobre a plataforma.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}