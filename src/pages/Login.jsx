import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // No MVP, ao clicar em entrar, redirecionamos direto para o Dashboard para demonstração.
        navigate('/dashboard');
    };

    return (
        <div className="flex justify-center items-center h-[calc(100vh-80px)]">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-2">Entrar na Feira Conectada</h2>
                <p className="text-gray-500 text-center mb-6 text-sm">Bem-vindo de volta! Acesse sua conta.</p>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-feira-green focus:border-feira-green"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full border border-gray-300 rounded-md p-2 focus:ring-feira-green focus:border-feira-green"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-feira-green text-white font-semibold py-2 rounded-md hover:bg-green-800 transition mt-2">
                        Entrar
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Não tem uma conta? <span className="text-feira-green font-semibold cursor-pointer">Criar uma conta</span>
                </p>
            </div>
        </div>
    );
}