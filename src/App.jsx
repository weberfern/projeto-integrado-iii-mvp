import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 text-feira-green font-bold text-xl">
        <span role="img" aria-label="leaf">🌿</span> Feira Conectada
      </div>
      <div className="flex gap-4 items-center">
        <Link to="/" className="text-gray-600 hover:text-feira-green">Home</Link>
        <Link to="/feiras" className="text-gray-600 hover:text-feira-green">Feiras</Link>
        <Link to="/login" className="bg-feira-green text-white px-4 py-2 rounded-md hover:bg-green-800">
          Entrar
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Home />
          </div>
        } />

        <Route path="/login" element={
          <div className="min-h-screen bg-feira-light">
            <Navbar />
            <Login />
          </div>
        } />

        {/* Rota Privada (Dashboard do Feirante) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;