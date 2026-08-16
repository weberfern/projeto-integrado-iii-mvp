import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={
          <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-sans">
            <Navbar />
            <Home />
            <Footer />
          </div>
        } />

        <Route path="/login" element={
          <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-sans">
            <Navbar />
            <Login />
            <Footer />
          </div>
        } />

        {/* Rota Privada (Dashboard do Feirante) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;