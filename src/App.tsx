import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TopPage } from './pages/TopPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/AboutPage';
import { ServicePage } from './pages/ServicePage';
import { CasePage } from './pages/CasePage';
import { PricePage } from './pages/PricePage';
import { ContactPage } from './pages/ContactPage';
import { CompanyPage } from './pages/CompanyPage';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/case" element={<CasePage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/company" element={<CompanyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
