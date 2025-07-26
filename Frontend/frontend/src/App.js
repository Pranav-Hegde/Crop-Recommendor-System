import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './pages/Signup';
import LoginForm from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* Removed React crop form route */}
      </Routes>
    </Router>
  );
}

export default App;
