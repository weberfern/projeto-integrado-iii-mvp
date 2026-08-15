import { Link } from 'react-router-dom';
import { ShoppingCart, Truck, Sprout } from 'lucide-react';

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="w-full bg-feira-light py-20 px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Sua feira favorita, <span className="text-feira-green">conectada</span> à sua rotina.
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Levamos o frescor dos melhores produtores locais diretamente para sua mesa, com a facilidade e agilidade que o seu dia a dia pede.
                </p>
                <Link to="/feiras" className="bg-feira-green text-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition">
                    Começar Agora
                </Link>
            </section>

            {/* Benefícios (Do Campo à sua Mesa) */}
            <section className="py-16 px-8 max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center border">
                    <ShoppingCart className="w-10 h-10 text-feira-green mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Escolha online</h3>
                    <p className="text-gray-500 text-sm">Navegue pelas feiras da sua região e selecione seus produtos favoritos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center border">
                    <Truck className="w-10 h-10 text-feira-green mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Entrega Ágil</h3>
                    <p className="text-gray-500 text-sm">Receba no mesmo dia ou agende para quando for melhor para você.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center border">
                    <Sprout className="w-10 h-10 text-feira-green mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Colheita Direta</h3>
                    <p className="text-gray-500 text-sm">Os produtores preparam seu pedido com o que há de mais fresco.</p>
                </div>
            </section>
        </main>
    );
}