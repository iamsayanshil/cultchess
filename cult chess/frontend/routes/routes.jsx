import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Footer';
import Footer from '../src/pages/Home';
import About from '../src/pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
