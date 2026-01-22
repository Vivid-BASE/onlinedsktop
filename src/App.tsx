import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ServiceSection } from './components/ServiceSection'
import { NewsSection } from './components/NewsSection'
import { Footer } from './components/Footer'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ServiceSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
