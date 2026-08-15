import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // No MVP, ao clicar em entrar/cadastrar, redirecionamos direto para o Dashboard para demonstração.
        navigate('/dashboard');
    };

    return (
        <div className="relative flex flex-col justify-center items-center flex-1 bg-[#FAFAFA] py-16 px-4 overflow-hidden min-h-[calc(100vh-140px)]">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D1EEDC] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 z-0"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#D1EEDC] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 z-0"></div>

            {/* Main Card */}
            <div className="relative z-10 bg-white p-10 sm:p-12 rounded-2xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100 w-full max-w-[440px]">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {isLogin ? 'Entrar na Feira Conectada' : 'Criar sua conta'}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        {isLogin 
                            ? 'Bem-vindo de volta! Acesse sua conta.' 
                            : 'Junte-se à nossa comunidade e apoie produtores locais.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 tracking-wider mb-2 uppercase">E-mail</label>
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-feira-green/20 focus:border-feira-green transition-all"
                            required
                        />
                    </div>
                    
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase">Senha</label>
                            {isLogin && (
                                <button type="button" className="text-xs text-feira-green font-semibold hover:underline cursor-pointer">
                                    Esqueci minha senha
                                </button>
                            )}
                        </div>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-feira-green/20 focus:border-feira-green transition-all"
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div>
                            <label className="block text-xs font-bold text-gray-500 tracking-wider mb-2 uppercase">Confirmar Senha</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-feira-green/20 focus:border-feira-green transition-all"
                                required
                            />
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className="w-full bg-[#0F3524] text-white font-medium py-3.5 rounded-full hover:bg-green-950 transition-colors shadow-sm mt-4 cursor-pointer"
                    >
                        {isLogin ? 'Entrar' : 'Criar Conta'}
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-500">
                        {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}{' '}
                        <button 
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-feira-green font-semibold hover:underline cursor-pointer"
                        >
                            {isLogin ? 'Criar uma conta' : 'Fazer login'}
                        </button>
                    </p>
                </div>
            </div>

            {/* Thumbnails at bottom */}
            <div className="relative z-10 flex gap-4 mt-6">
                <div className="w-36 h-16 rounded-lg overflow-hidden shadow-sm border border-gray-200/50">
                    <img 
                        src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=300&q=80" 
                        alt="Vegetais Frescos" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-36 h-16 rounded-lg overflow-hidden shadow-sm border border-gray-200/50">
                    <img 
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=300&q=80" 
                        alt="Plantação" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}